function hadyBady() {
  var words = ["hady", "bady", "cromp", "zabady", "shalo", "we 7ato", "kolo", "3lady", "ya katkot", "ro7", "souq", "hat", "elbida", "men", "elsandok", "aowa", "takolha", "tet2a", "temot", "ya katkot"];
  for (let i = 0, size = words.length; i < size; ++i) {
	if (i % 2 == 0) { // even
		console.log(words[i], "YES");
	} else { // odd
		console.log(words[i], "NO");
	}
}
