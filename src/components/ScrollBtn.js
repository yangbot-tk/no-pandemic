import React from "react"
import $ from "jquery"

function ScrollBtn() {
  $(document).ready(function () {
    var scroll_btn = $("#back-to-top-btn")

    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
        scroll_btn.addClass("show")
      } else {
        scroll_btn.removeClass("show")
      }
    })

    scroll_btn.on("click", function (e) {
      e.preventDefault()
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        "300"
      )
    })
  })

  return <a id="back-to-top-btn" />
}

export default ScrollBtn
