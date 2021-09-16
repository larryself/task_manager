document.querySelector('.load-content__file-load-input').addEventListener('change', function (e) {
  const div = document.createElement('div');
  div.classList.add('load-content__uploaded-inner', 'load-content__uploaded-inner--loading');
  const block = document.querySelector('.load-content__uploaded');
  const img = document.createElement('img');
  img.classList.add('load-content__uploaded-content');
  img.src = URL.createObjectURL(this.files[0]);
  img.onload = console.log('alarma');
  div.append(img);
  block.append(div);
});
