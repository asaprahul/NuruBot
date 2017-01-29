import java.io.File;
import java.io.IOException;
import java.io.StringWriter;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;
import org.apache.commons.math3.ml.distance.EuclideanDistance;

import com.ibm.watson.developer_cloud.personality_insights.v2.PersonalityInsights;
import com.ibm.watson.developer_cloud.personality_insights.v2.model.Profile;
import com.ibm.watson.developer_cloud.personality_insights.v2.model.Trait;
import com.ibm.watson.developer_cloud.util.CredentialUtils;

public class WatsonAPI {

public static void main(String[] args) throws IOException {

CredentialUtils.setServices(FileUtils.readFileToString(new File(“./vcap.json”)));
PersonalityInsights pi = new PersonalityInsights();
pi.setApiKey(CredentialUtils.getAPIKey(“personality_insights”));

StringWriter output = new StringWriter();


IOUtils.copy(WatsonAPI.class.getResourceAsStream(“karenina.txt”), output);
Profile profileKarenina = pi.getProfile(output.toString());

output = new StringWriter();

IOUtils.copy(WatsonAPI.class.getResourceAsStream(“emma.txt”), output);
Profile profileEmma = pi.getProfile(output.toString());

output = new StringWriter();

IOUtils.copy(WatsonAPI.class.getResourceAsStream(“warpeace.txt”), output);
Profile profileWarAndPeace = pi.getProfile(output.toString());

double distanceKareninaEmma = getDistance(profileKarenina,profileEmma);
double distanceKareninaWarAndPeace = getDistance(profileKarenina,profileWarAndPeace);
double distanceWarAndPeaceEmma = getDistance(profileWarAndPeace,profileEmma);

System.out.println(“Karenina vs Emma :”+distanceKareninaEmma);
System.out.println(“Karenina vs WarAndPeace :”+distanceKareninaWarAndPeace);
System.out.println(“WarAndPeace vs Emma :”+distanceWarAndPeaceEmma);

}

private static double getDistance(Profile p1, Profile p2) {

double[] a = getFeatureVector(p1);
double[] b = getFeatureVector(p2);

return new EuclideanDistance().compute(a, b);
}

private static double[] getFeatureVector(Profile p) {


double[] v = new double[30];

int counter = 0;

for(Trait a : p.getTree().getChildren()){
for(Trait b : a.getChildren()){
for(Trait c : b.getChildren()){
if (c.getChildren() != null){
for(Trait d : c.getChildren()){
v[counter] = d.getPercentage();
counter++;
}
}
}
}
}

return v;
}

}
