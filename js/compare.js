let selectedCars = [];

function addToCompare(name, image, price, power, engine, fuel, size, seats) {
  if (selectedCars.find(car => car.name === name)) return;

  if (selectedCars.length >= 3) {
    alert('Chỉ được so sánh tối đa 3 xe.');
    return;
  }

  selectedCars.push({
    name,
    image,
    price,
    power,
    engine,
    fuel,
    size,
    seats
  });

  updateCompareBar();
}


    function updateCompareBar() {
      const bar = document.getElementById('compare-bar');
      const container = document.getElementById('compare-items');
      container.innerHTML = '';

      selectedCars.forEach(car => {
        const item = document.createElement('div');
        item.innerHTML = `<img src="${car.image}" alt="${car.name}" title="${car.name}">`;
        container.appendChild(item);
      });

      if (selectedCars.length > 0) {
        bar.classList.add('show');
      } else {
        bar.classList.remove('show');
      }
    }

    function clearCompare() {
      selectedCars = [];
      updateCompareBar();
    }

    function compareNow() {
      if (selectedCars.length < 2) {
        alert('Vui lòng chọn ít nhất 2 xe để so sánh.');
        return;
      }

      const specsList = [
        { key: 'name', label: 'Tên xe' },
        { key: 'price', label: 'Giá' },
        { key: 'power', label: 'Công suất' },
        { key: 'engine', label: 'Động cơ' },
        { key: 'fuel', label: 'Tiêu thụ nhiên liệu' },
        { key: 'size', label: 'Kích thước' },
        { key: 'seats', label: 'Số chỗ' }
      ];

      const container = document.getElementById('compare-popup-table');
      let html = `<table class="compare-table">`;

      specsList.forEach(spec => {
        html += `<tr><th>${spec.label}</th>`;
        selectedCars.forEach(car => {
          html += `<td>${car[spec.key]}</td>`;
        });
        html += `</tr>`;
      });

      html += `</table>`;
      container.innerHTML = html;
      document.getElementById('compare-modal').classList.remove('hidden');
    }

    function closeCompareModal() {
      document.getElementById('compare-modal').classList.add('hidden');
    }