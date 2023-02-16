!function(){var e,t=document.querySelector("body"),c=document.querySelector("#codepen"),s="light-theme",a="dark-theme";(e=localStorage.getItem("Theme"))===a?(t.classList.add(e),c.checked=!0):t.classList.add(s),c.addEventListener("change",(function(){t.classList.toggle(a),t.classList.toggle(s),e=t.classList,localStorage.setItem("Theme",e);var e}))}();
//# sourceMappingURL=library.f9c22210.js.map
