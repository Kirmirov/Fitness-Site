const sendForm = (formSelector) => {
    const form = document.getElementById(formSelector),
        thanks = document.getElementById('thanks'),
        errorMSG = 'Ошибка соединения! Попробуйте позже!',
        allertMSG = 'Пожалуйста согласитесь с обработкой данных!';

    let check = true;
    const blockMSG = document.createElement('div');
    blockMSG.style.cssText = 'font-size: 1rem;';
    blockMSG.style.color = '#ffd11a';
    blockMSG.style.textAlign = 'center';

    form.addEventListener('submit', evt => {
        evt.preventDefault();
        form.appendChild(blockMSG);

        check = true;
        if(form.querySelector('.personal-data>input') !== null){
            const checkBoxPersonalData = form.querySelector('.personal-data>input');
            
            if(!checkBoxPersonalData.checked){
                blockMSG.textContent = allertMSG;
                blockMSG.style.paddingTop = '10px';
                setTimeout(() => {
                    blockMSG.textContent = '';
                }, 3000);
                check = false;
            }
        }

        if(!check) return;
        blockMSG.textContent = '';
        blockMSG.insertAdjacentHTML('beforeend', `
        <div class="loadingio-spinner-spin-qz6obarf74s"><div class="ldio-1lk41x2pzsaj">
            <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
            </div></div>
        <style type="text/css">
            @keyframes ldio-1lk41x2pzsaj {
            0% {
                opacity: 1;
                backface-visibility: hidden;
                transform: translateZ(0) scale(1.5,1.5);
            } 100% {
                opacity: 0;
                backface-visibility: hidden;
                transform: translateZ(0) scale(1,1);
            }
            }
            .ldio-1lk41x2pzsaj div > div {
            position: absolute;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #ffd11a;
            animation: ldio-1lk41x2pzsaj 1s linear infinite;
            }.ldio-1lk41x2pzsaj div:nth-child(1) > div {
            left: 77px;
            top: 44px;
            animation-delay: -0.875s;
            }
            .ldio-1lk41x2pzsaj > div:nth-child(1) {
            transform: rotate(0deg);
            transform-origin: 83px 50px;
            }.ldio-1lk41x2pzsaj div:nth-child(2) > div {
            left: 67px;
            top: 67px;
            animation-delay: -0.75s;
            }
            .ldio-1lk41x2pzsaj > div:nth-child(2) {
            transform: rotate(45deg);
            transform-origin: 73px 73px;
            }.ldio-1lk41x2pzsaj div:nth-child(3) > div {
            left: 44px;
            top: 77px;
            animation-delay: -0.625s;
            }
            .ldio-1lk41x2pzsaj > div:nth-child(3) {
            transform: rotate(90deg);
            transform-origin: 50px 83px;
            }.ldio-1lk41x2pzsaj div:nth-child(4) > div {
            left: 21px;
            top: 67px;
            animation-delay: -0.5s;
            }
            .ldio-1lk41x2pzsaj > div:nth-child(4) {
            transform: rotate(135deg);
            transform-origin: 27px 73px;
            }.ldio-1lk41x2pzsaj div:nth-child(5) > div {
            left: 11px;
            top: 44px;
            animation-delay: -0.375s;
            }
            .ldio-1lk41x2pzsaj > div:nth-child(5) {
            transform: rotate(180deg);
            transform-origin: 17px 50px;
            }.ldio-1lk41x2pzsaj div:nth-child(6) > div {
            left: 21px;
            top: 21px;
            animation-delay: -0.25s;
            }
            .ldio-1lk41x2pzsaj > div:nth-child(6) {
            transform: rotate(225deg);
            transform-origin: 27px 27px;
            }.ldio-1lk41x2pzsaj div:nth-child(7) > div {
            left: 44px;
            top: 11px;
            animation-delay: -0.125s;
            }
            .ldio-1lk41x2pzsaj > div:nth-child(7) {
            transform: rotate(270deg);
            transform-origin: 50px 17px;
            }.ldio-1lk41x2pzsaj div:nth-child(8) > div {
            left: 67px;
            top: 21px;
            animation-delay: 0s;
            }
            .ldio-1lk41x2pzsaj > div:nth-child(8) {
            transform: rotate(315deg);
            transform-origin: 73px 27px;
            }
            .loadingio-spinner-spin-qz6obarf74s {
            width: 45px;
            height: 45px;
            display: inline-block;
            overflow: hidden;
            background: none;
            }
            .ldio-1lk41x2pzsaj {
            width: 100%;
            height: 100%;
            position: relative;
            transform: translateZ(0) scale(0.45);
            backface-visibility: hidden;
            transform-origin: 0 0; /* see note above */
            }
            .ldio-1lk41x2pzsaj div { box-sizing: content-box; }
        </style>
        `);
        let body = {};
        const formData = new FormData(form);

        formData.forEach((val, key) => {
            body[key] = val;
        });

        postData(body)
        .then((response)=>{
            blockMSG.textContent = '';
            if (response.status !== 200) {
                throw new Error('status network not 200.');
            }
            form.reset();
            thanks.style.display = 'block';
            blockMSG.textContent = '';
            removeAllModalForms();
        })
        .catch((error)=>{
            blockMSG.textContent = errorMSG;
            blockMSG.style.paddingTop = '10px';
            form.reset();
            console.error(error);
            setTimeout(() => {
                blockMSG.textContent = '';
            }, 3000);
        });
    });

    const postData = body => fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    thanks.addEventListener('click', evt => {
        let target = evt.target;
        if(target.matches('.close_icon, .close-btn')) thanks.style.display = 'none';
    });

    const removeAllModalForms = () => {
        document.getElementById('callback_form').style.display = 'none';
        document.getElementById('free_visit_form').style.display = 'none';
    };
};

export default sendForm;