document.addEventListener('DOMContentLoaded', () => {
    const correctCode = "44076";
    const input = document.getElementById('codeInput');
    const submitBtn = document.getElementById('submitBtn');
    const message = document.getElementById('message');
  
    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        const val = input.value.trim();
        if (val.length !== 5 || !/^\d{5}$/.test(val)) {
          message.textContent = "กรุณาใส่ตัวเลข 5 หลักเท่านั้น";
          return;
        }
  
        if (val === correctCode) {
          message.style.color = "#a0ffa0";
          message.textContent = "รหัสถูกต้อง กำลังเปลี่ยนหน้า...";
          setTimeout(() => {
            window.location.href = "page2.html";
          }, 1000);
        } else {
          message.style.color = "#ff6b6b";
          message.textContent = "รหัสไม่ถูกต้อง ลองใหม่อีกครั้ง";
        }
      });
    }
  });

const numbers = document.querySelectorAll('.number.hover-reveal');
let messageShown = false;

function showMessage(text) {
  if (messageShown) return;
  messageShown = true;

  let overlay = document.createElement('div');
  overlay.textContent = text;
  Object.assign(overlay.style, {
    position: 'fixed',
    top: '10%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0,0,0,0.8)',
    color: 'white',
    padding: '20px 40px',
    borderRadius: '8px',
    fontSize: '24px',
    zIndex: 10000,
    textAlign: 'center',
    boxShadow: '0 0 10px rgba(255,255,255,0.7)'
  });
  document.body.appendChild(overlay);

  setTimeout(() => {
    document.body.removeChild(overlay);
  }, 3000);
}

const currentPage = window.location.pathname.split('/').pop();

let messageText = "How did you find it!!?";
if(currentPage === 'page2.html')messageText = "Impossible!!";

numbers.forEach(number => {
  number.addEventListener('mouseenter', () => {
    showMessage(messageText);
  }, { once: true });
});