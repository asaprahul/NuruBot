var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
var personality_insights = new PersonalityInsightsV3({
  username: 'd5965998-32d0-4d0f-ade0-afdc6034a61b',
  password: 'xxqmIUrnpxRR',
  version_date: '2016-10-19'
});

fs = require('fs');
fs.readFile('./test_data_1.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  personality_insights.profile({
    text: data,
    consumption_preferences: true
    },
    function (err, response) {
      if (err)
        console.log('error:', err);
      else
      var fs = require('fs');
  fs.writeFile("./test", JSON.stringify(response, null, 2), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("");
  });
  });
});



var personality_insights = new PersonalityInsightsV3({
  username: 'd5965998-32d0-4d0f-ade0-afdc6034a61b',
  password: 'xxqmIUrnpxRR',
  version_date: '2016-10-19'
});
fs = require('fs');
fs.readFile('./test_data_2.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  personality_insights.profile({
    text: data,
    consumption_preferences: true
    },
    function (err, response) {
      if (err)
        console.log('error:', err);
      else
      var fs = require('fs');
  fs.writeFile("./test1", JSON.stringify(response, null, 2), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("");
  });
  });

});

var fs = require('fs');

function get_line(filename, line_no, callback) {
    var data = fs.readFileSync(filename, 'utf8');
    var lines = data.split("\n");

    if(+line_no > lines.length){
      throw new Error('File end reached without finding line');
    }

    callback(null, lines[+line_no]);
}
var att1,att_1_2,att2,att_2_2,att_3_2,att3;
get_line('./test', 9, function(err, line){
  att1 = line.substring(21, 29);
  att1=parseFloat(att1);
}
)
get_line('./test1', 9, function(err, line){
  att_1_2 = line.substring(21, 29);
  att_1_2=parseFloat(att_1_2);
})
get_line('./test', 15, function(err, line){
  att2 = line.substring(23, 31);
  att2=parseFloat(att2);;
})
get_line('./test1', 15, function(err, line){
  att_2_2 = line.substring(23, 31);
  att_2_2=parseFloat(att_2_2);
})
get_line('./test1', 21, function(err, line){
  att_3 = line.substring(23, 31);
  att_3=parseFloat(att_3);
})
get_line('./test1', 21, function(err, line){
  att_3_2 = line.substring(23, 31);
  att_3_2=parseFloat(att_3_2);
})
var count=0;
if((att1 - att_1_2) < 0.1)
{
count = count + 1;
}
var difference_1 = att2 - att_2_2;
if(difference_1 < 0.1)
{
count = count + 1;
}
if((att3 - att_3_2) < 0.1)
{
count = count + 1;
}
if(count > 1)
{
  console.log("Congratulations you are a match");
}
