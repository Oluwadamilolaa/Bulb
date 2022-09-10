
    const btn1 = document.getElementById("mybtn1");
    const btn2 = document.getElementById("mybtn2");
    const image = document.getElementById("myimage");

    btn1.addEventListener("click", () =>{
        image.src = "pic_bulbon.gif"
    }
        );

        btn2.addEventListener("click", () =>{
            image.src = "pic_bulboff.gif"
        }
            );