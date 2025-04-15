let currentStep = 1;
    const selections = {
      flowers: {},
      packaging: '',
      ribbon: '',
      decor: []
    };

    function showStep(step) {
      document.querySelectorAll('.step').forEach(el => el.classList.remove('active'));
      document.getElementById(`step-${step}`).classList.add('active');
    }

    document.addEventListener('DOMContentLoaded', () => {
      showStep(currentStep);

      document.querySelectorAll('.next').forEach(btn => {
        btn.addEventListener('click', () => {
          if (currentStep < 4) {
            currentStep++;
            showStep(currentStep);
            if (currentStep === 4) showSummary();
          }
        });
      });

      document.querySelectorAll('.prev').forEach(btn => {
        btn.addEventListener('click', () => {
          if (currentStep > 1) {
            currentStep--;
            showStep(currentStep);
          }
        });
      });

      document.querySelectorAll('.flower').forEach(flower => {
        const name = flower.getAttribute('data-name');
        const countSpan = flower.querySelector('.count');
        let count = 0;

        flower.querySelector('.plus').addEventListener('click', () => {
          count++;
          countSpan.textContent = count;
          selections.flowers[name] = count;
        });

        flower.querySelector('.minus').addEventListener('click', () => {
          if (count > 0) count--;
          countSpan.textContent = count;
          if (count > 0) {
            selections.flowers[name] = count;
          } else {
            delete selections.flowers[name];
          }
        });
      });

      document.querySelectorAll('#step-2 .options button[data-value]').forEach(btn => {
        btn.addEventListener('click', () => {
          selections.packaging = btn.getAttribute('data-value');
          document.querySelectorAll('#step-2 .options button[data-value]').forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
        });
      });

      document.querySelectorAll('#step-2 .options button[data-ribbon]').forEach(btn => {
        btn.addEventListener('click', () => {
          selections.ribbon = btn.getAttribute('data-ribbon');
          document.querySelectorAll('#step-2 .options button[data-ribbon]').forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
        });
      });

      document.querySelectorAll('#step-3 .options button').forEach(btn => {
        btn.addEventListener('click', () => {
          const value = btn.getAttribute('data-value');
          if (selections.decor.includes(value)) {
            selections.decor = selections.decor.filter(item => item !== value);
            btn.classList.remove('selected');
          } else {
            selections.decor.push(value);
            btn.classList.add('selected');
          }
        });
      });
    });

    function showSummary() {
        const list = document.getElementById('summary-list');
        list.innerHTML = '';
      
        Object.entries(selections.flowers).forEach(([name, qty]) => {
          const li = document.createElement('li');
          li.textContent = `${qty} x ${name}`;
          list.appendChild(li);
        });
      
        const liPack = document.createElement('li');
        liPack.textContent = `Упаковка: ${selections.packaging}`;
        list.appendChild(liPack);
      
        if (selections.ribbon) {
          const liRibbon = document.createElement('li');
          liRibbon.textContent = `Стрічка: ${selections.ribbon}`;
          list.appendChild(liRibbon);
        }
      
        selections.decor.forEach(decor => {
          const li = document.createElement('li');
          li.textContent = `Декор: ${decor}`;
          list.appendChild(li);
        });

        document.getElementById('finish').addEventListener('click', () => {
          alert('Ваш букет ідеальний!');

          currentStep = 1;
          showStep(currentStep);

          selections.flowers = {};
          selections.packaging = '';
          selections.ribbon = '';
          selections.decor = [];

          document.querySelectorAll('.count').forEach(el => el.textContent = '0');

          document.querySelectorAll('.options button').forEach(btn => btn.classList.remove('selected'));

          document.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach(i => i.checked = false);
        });
      }