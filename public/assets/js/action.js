$(function () {
  $(document).on('click', '.join-meeting', function () {
    $('.enter-code').focus();
  });
  $(document).on('click', '.join-action', function () {
    let join_value = $('.enter-code').val();
    let meetingUrl = window.location.origin + '?meetingID=' + join_value;
    window.location.replace(meetingUrl);
  });
  $(document).on('click', '.new-meeting', function () {
    let eight_d_value = Math.floor(Math.random()*100000000)
    let meetingUrl = window.location.origin + '?meetingID=' + eight_d_value;
    window.location.replace(meetingUrl);
  });
});
