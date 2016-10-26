---
title : "revell"
icone: "revell.png"
mention: <i class="fa fa-trophy" aria-hidden="true"></i><span class="hidden-xs">&nbsp;Prix Laval Virtual</span>
order: 2

desc : "Expérience de perception alternative en réalité virtuelle"
headervideo: "https://www.youtube.com/embed/JZDoS4jbZEA"

displaydate: "Automne 2015"
context: "Université de Technologie de Compiègne"
team: "Ce projet a été réalisé avec Aurélien Delval. Nous avons ensemble conceptualisé le projet, j'ai ensuite eu la tâche de le développer."

projectcategories:
   - name : dev
     size : 3
   - name : ux
     size : 2
   - name : ui
     size : 2
   - name: rv

technologies:
   - unity
   - csharp


---
Comment se repérer dans un espace que l'on ne peut percevoir que par ses mouvements ?

**revell** est un projet de **réalité virtuelle** dans lequel l'utilisateur 
est immergé à la première personne dans un environnement constiué d'obstacles initialement invisibles.
Sans ses repères perceptifs habituels, l'utilisateur peut révéler le monde 
l'entourant, à travers ses gestes physiques et ses actions :
Les surface de l'environnement virtuel sont au début invisibles, mais quand 
les mains de l'utilisateur les touchent, elles deviennent visibles. Le retour
est donc uniquement visuel et non haptique.

<div class="alert alert-danger"><p><i class="fa fa-trophy" aria-hidden="true">
</i>&nbsp;<b>revell</b> a gagné le <b>Prix "Virtual Fantasy award" au salon <a href="http://www.laval-virtual.org/">Laval Virtual</a></b>, auquel il
a été présenté au grand public.</p>
<p>Laval Virtual est un salon international des technologies de réalité virtuelle et de ses applications. 
Notre projet a été présenté et nommé gagnant parmi une douzaine de projets étudiant dans la catégorie démo. 
Le jury  a particulièrement aimé l'engagement corporel que doit avoir l'utilisateur dans cette expérience.</p>
</div>

Cette possibilité est offerte par les controlleurs Razer Hydra qui reproduisent les mouvements et positions des mains dans l'environnement virtuel. 
Enfin, le casque Oculus Rift transcrit les mouvements de têtes sur le personnage virtuel.

---

## Méthodologie du projet
### Recherche de concept
Inspirés par les théories de sciences cognitives sur la perception spatiale, nous 
sommes partis de l'idée d'une expérience où l'utilisateur aurait des capacités
similaires à celles d'une personne aveugle et devrait utiliser des nouveaux
mouvements pour se repérer.

<div class="thumbnail">
      <img src="revell/drawconcepts.png" class="img-responsive" alt="Schémas de concepts préalables">
      <div class="caption">
        <p>Schémas des concepts imaginés en amont du projet : révéler les 
        surfaces par le toucher (virtuel), utiliser le son comme écho,
        sous-diviser le monde à révéler en voxels... (Dessins A.Delval)</p>
      </div>
</div>

### Développement
Avec les limitations techniques et de temps, nous avons réduit les interactions à
la plus importante, celle de toucher des surfaces avec les mains. Le moteur 
du jeu a ensuite été développé avec Unity3D.
<div class="thumbnail">
      <img src="revell/development.png" class="img-responsive" alt="Aperçus du développement">
      <div class="caption">
        <p>Aperçus du monde modélisé sur Unity, le résultat de sa transformation en
        cubes (voxelization), les zones de collision du joueur et un des
        premiers aperçus du jeu en temps réel</p>
      </div>
</div>

### Tests utilisateurs
Pour recueillir les ressentis que pouvaient avoir les joueurs, nous l'avons
fait tester à des volontaires. De ces observations sont ressortis le besoin d'effectuer des
ajustements et l'ajout nécessaire d'un guidage pour prendre en main les commandes.
Ces retours ont contribués à une version améliorée, présentée au salon Laval Virtual.

<div class="thumbnail">
      <img src="revell/usertesting.png" class="img-responsive" alt="Aperçus du développement">
      <div class="caption">
        <p>Séance de test d'utilisation </p>
      </div>
</div>