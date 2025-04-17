const suggestions = [
  "GLC 300 COUPLE",
  "GLC 300 4MATIC",
  "GLC 200 4MATIC",
  "E 300 AMG",
  "E 200 Exclusive",
  "E 180",
  "AMG C43 4Matic",
  "C 300 AMG",
  "C 200 Avantgarde Plus",
];

function toIdFormat(name) {
  return name.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[()]/g, '') 
    .replace(/[^a-z0-9\-]/g, ''); 
}

function handleSuggestions() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const list = document.getElementById("suggestionList");
  list.innerHTML = "";
  if (input.length === 0) return;

  const matched = suggestions.filter(item => item.toLowerCase().includes(input));
  matched.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    li.onclick = () => {
      document.getElementById("searchInput").value = item;
      list.innerHTML = "";

      const id = toIdFormat(item);
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    list.appendChild(li);
  });
}