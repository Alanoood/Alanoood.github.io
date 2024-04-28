const text = `متجر نود للحلويات متجر يقدم لكم اجود انواع الشوكلاته ذات الجوده المتميزه ويتم صناعتها في مصانعنا لنضمن لكم جوده المنتجات`;
let index = 0;
const typewriterElement = document.getElementById('typewriter');

function type() {
  typewriterElement.innerHTML += text.charAt(index);
  index++;
  if (index < text.length) {
    setTimeout(type, 50); 
  }
}

type();