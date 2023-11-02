document.querySelectorAll('.ajouterAuPanier').forEach(function(bouton) {
    bouton.addEventListener('click', function() {
        let produit = this.parentElement;
        let nomProduit = produit.querySelector('h2').textContent;
        let prixProduit = parseFloat(produit.querySelector('p').textContent.split(' ')[1]);

        let itemPanier = document.createElement('li');
        itemPanier.textContent = nomProduit + ' - ' + prixProduit + '€';
        document.getElementById('listePanier').appendChild(itemPanier);

        let totalPrix = parseFloat(document.getElementById('totalPrix').textContent);
        totalPrix += prixProduit;
        document.getElementById('totalPrix').textContent = totalPrix + '€';
    });
});

document.getElementById('passerCommande').addEventListener('click', function() {
    document.getElementById('panier').style.display = 'none';
    document.getElementById('formulaireCommande').style.display = 'block';
});

document.getElementById('formulaireContact').addEventListener('submit', function(e) {
    e.preventDefault();

    let nom = document.getElementById('nom').value;
    let email = document.getElementById('email').value;

    // Vous devez envoyer ces données à votre serveur pour le traitement ultérieur.
    // Vous pouvez utiliser une bibliothèque comme Axios ou un autre moyen pour cela.

    // Par exemple, avec Axios :
    // axios.post('URL_DU_ENDPOINT', { nom: nom, email: email })
    //     .then(function (response) {
    //         alert('Commande passée avec succès !');
    //     })
    //     .catch(function (error) {
    //         console.error(error);
    //     });

    alert('Commande passée avec succès !');
});
