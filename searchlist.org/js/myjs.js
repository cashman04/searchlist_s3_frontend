function genRandomChannelId() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}
var channelId = genRandomChannelId();

Pusher.logToConsole = true;

var pusher = new Pusher('c49898a8563981b623a0', {
  cluster: 'us2',
  encrypted: true
});

var channel = pusher.subscribe(channelId);
  channel.bind('return_cities', function(data) {
  $("ul#city_list").append("<li class='city_result'><a href='" + data.url + "' target='_blank'>" + data.city + ', ' + data.state + "</a></li>").append("<ul class='city_result' id='" + data.city + "_" + data.state + "'></ul>");
});

function submitRequestAPI() {
  var $inputs = $('#mysearch :input').not(':button');
  var data = {};
  $inputs.each(function() {
      data[this.name] = $(this).val();
  });
  data['pusher_channel'] = channelId;
  console.log(JSON.stringify(data));
  $("ul#city_list").empty()
  $.ajax({
  type: "POST",
  url: 'https://api.searchlist.org/REGION',
  data: JSON.stringify(data)
});
};






