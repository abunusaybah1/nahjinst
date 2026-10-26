(function () {
  "use strict";

  var WHATSAPP = "2348164758649";

  /* ---------- Footer year ---------- */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- Mobile menu ---------- */
  var menuBtn = document.getElementById("menu-btn");
  var menu = document.getElementById("mobile-menu");
  var iconOpen = document.getElementById("icon-open");
  var iconClose = document.getElementById("icon-close");

  function setMenu(open) {
    menu.classList.toggle("hidden", !open);
    iconOpen.classList.toggle("hidden", open);
    iconClose.classList.toggle("hidden", !open);
    menuBtn.setAttribute("aria-expanded", String(open));
  }

  if (menuBtn && menu) {
    menuBtn.addEventListener("click", function () {
      setMenu(menu.classList.contains("hidden"));
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        setMenu(false);
      });
    });
  }

  /* ---------- Contact form -> WhatsApp ---------- */
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.getElementById("contact-name").value.trim();
      var message = document.getElementById("contact-message").value.trim();
      var text =
        "As-salaamu alaykum! My name is " +
        (name || "________") +
        ".\n\n" +
        (message || "I would like to make an enquiry about An-Nahj Islamic Institute.");
      window.open(
        "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(text),
        "_blank",
        "noopener"
      );
    });
  }

  /* ---------- Enroll: rules & regulations modal ---------- */
  var modal = document.getElementById("rules-modal");
  if (modal) {
    var checks = Array.prototype.slice.call(modal.querySelectorAll(".rule-check"));
    var counter = document.getElementById("rules-count");
    var proceed = document.getElementById("rules-proceed");
    var total = checks.length;

    var ON = ["bg-[#144727]/10", "border-[#144727]/40"];
    var OFF = ["bg-white/40", "border-[#d4c6b5]"];
    var BTN_ON = ["bg-[#144727]", "hover:bg-[#0f3a1f]", "hover:scale-105", "cursor-pointer"];
    var BTN_OFF = ["bg-gray-400", "cursor-not-allowed"];

    function refresh() {
      var done = 0;
      checks.forEach(function (c) {
        var label = c.closest("label");
        if (c.checked) done++;
        OFF.forEach(function (cls) { label.classList.toggle(cls, !c.checked); });
        ON.forEach(function (cls) { label.classList.toggle(cls, c.checked); });
      });
      var all = done === total;
      counter.textContent = done;
      proceed.disabled = !all;
      BTN_ON.forEach(function (cls) { proceed.classList.toggle(cls, all); });
      BTN_OFF.forEach(function (cls) { proceed.classList.toggle(cls, !all); });
      proceed.textContent = all
        ? "I Agree & Proceed to Enroll"
        : "Confirm all " + total + " rules to proceed";
    }

    checks.forEach(function (c) { c.addEventListener("change", refresh); });

    proceed.addEventListener("click", function () {
      if (proceed.disabled) return;
      var text =
        "As-salaamu alaykum! \n \n I want to enroll at An-Nahj Islamic Institute and I have gone through the website. The class I want to join is ________";
      window.open(
        "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(text),
        "_blank",
        "noopener"
      );
    });

    refresh();
    setTimeout(function () {
      modal.classList.remove("hidden");
      modal.classList.add("flex");
    }, 3000);
  }
})();
