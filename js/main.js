const input = document.getElementById('colorInput');
const btn = document.getElementById('applyBtn');

function isValidCssColor(value) {
	const s = new Option().style;
	s.color = '';
	s.color = value;
	return s.color !== '';
}

function applyColor() {
	const val = input.value.trim();
	if (!val) return;
	if (isValidCssColor(val)) {
		document.body.style.background = val;
		input.classList.remove('invalid');
	} else {
		input.classList.add('invalid');
	}
}

btn.addEventListener('click', applyColor);
input.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') applyColor();
});
