// The clock in the menu bar, formatted the way macOS shows it.
(function () {
  var clock = document.getElementById("clock");
  if (!clock) return;
  var day = new Intl.DateTimeFormat(undefined, { weekday: "short", day: "numeric", month: "short" });
  var time = new Intl.DateTimeFormat(undefined, { hour: "2-digit", minute: "2-digit" });
  function tick() {
    var now = new Date();
    clock.textContent = day.format(now).replace(/,/g, "") + "  " + time.format(now);
    clock.setAttribute("datetime", now.toISOString());
  }
  tick();
  setInterval(tick, 10000);
})();
