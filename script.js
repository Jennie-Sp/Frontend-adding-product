let storageItemBlockCardAll = document.querySelectorAll(".storage-item-block-card");

/*Появление кнопки удаления и удаление элемента из DOM*/
for (let storageItemBlockCard of storageItemBlockCardAll) {
    storageItemBlockCard.addEventListener("mouseover", function(){
        let storageItemBlockCardDel = storageItemBlockCard.querySelector(".storage-item-block-card-del");
        storageItemBlockCardDel.target = storageItemBlockCardDel.style.display = "block";

        storageItemBlockCardDel.onclick = function () {
            storageItemBlockCard.remove();
        }

        storageItemBlockCard.addEventListener("mouseout", function(){
            storageItemBlockCardDel.target = storageItemBlockCardDel.style.display = "none";
        })
    })
}