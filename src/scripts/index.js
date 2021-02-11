document.addEventListener("DOMContentLoaded", function () {
	const feedback = document.querySelectorAll('#feedback');
	const buttonCallRequest = document.querySelectorAll('.callrequest');
	const popup = document.querySelector('.popup');

	buttonCallRequest.forEach(node => {
		node.addEventListener("click", (e) => {
			popup.classList.add('active');
			popup.querySelector("#feedback").classList.add('active');
			popup.addEventListener("click", (e) => {
				if(e.target === popup) {
					popup.classList.remove('active');
					popup.classList.remove('ok');
					popup.classList.remove('fail');
				}
			})
		})
	})

	const ajaxSend = (formData) => {
		fetch('/php/sendmail.php', { // файл-обработчик
			method: 'POST',
			body: formData
		})
			.then(response =>  {
				popup.querySelector("#feedback").classList.remove('active');
				if(response.ok) {
					popup.classList.add("ok");
					return response.text();
				}
				popup.classList.add("fail");
			})
	};

	for (let i = 0; i < feedback.length; i++) {

		feedback[i].addEventListener('submit', function (e) {
			e.preventDefault();
			const formData = new FormData();
			formData.append("fio", this.querySelector("#fio").value)
			formData.append("email", this.querySelector("#email").value)
			formData.append("phone", this.querySelector("#phone").value)
			ajaxSend(formData);
			this.reset();
			this.classList.remove('active');
		});
	};
});
