---
title : "Tableau de bord WE DO GOOD V2"
icone: "wdg2.png"
order: 3

desc : "Refonte du tableau de bord pour la plateforme de financement participatif WE DO GOOD"
displaydate: "Eté 2016"
context: "WE DO GOOD"

projectcategories:
   - name : dev
     size : 3
   - name : ux
     size : 2
   - name : ui
     size : 2

technologies:
   - htmlcss
   - jquery
   - php
   - wordpress
---
<div id="carousel-wdg" class="carousel slide" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li data-target="#carousel-wdg" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-wdg" data-slide-to="1"></li>
    <li data-target="#carousel-wdg" data-slide-to="2"></li>
    <li data-target="#carousel-wdg" data-slide-to="3"></li>
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner" role="listbox">
    <div class="item active">
      <img src="wdg/stats.png" alt="Capture onglet stats">
      <div class="carousel-caption">
      </div>
    </div>
    <div class="item">
      <img src="wdg/infos.png" alt="Capture onglet infos">
      <div class="carousel-caption">
      </div>
    </div>
    <div class="item">
          <img src="wdg/fin.png" alt="Capture onglet financier">
          <div class="carousel-caption">
          </div>
    </div>
    <div class="item">
          <img src="wdg/contacts.png" alt="Capture onglet contacts">
          <div class="carousel-caption">
          </div>
    </div>
  </div>

  <!-- Controls -->
  <a class="left carousel-control" href="#carousel-wdg" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#carousel-wdg" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<br/>

Suite à mon stage de fin de Licence avec la plateforme de financement participatif 
de [WE DO GOOD](http://www.wedogood.co), j'ai en 2016 travaillé deux mois pour 
effectuer une refonte de cet outil. Celle-ci a mené de sa conception à une
partie fonctionnelle de son développement.
Celui-ci est destiné aux porteurs de projets pour monitorer et gérer leur
levée de fonds. 

En arrivant, la réflexion sur le parcours client global et la structure du
tableau de bord avait été menée. La refonte devait amener une meilleure
prise en main et guider les porteurs de projet pour les inciter à l'utiliser
et faciliter ainsi le travail de l'équipe d'accompagnement.
Le choix des outils à intégrer s'est fait avec une observation des habitudes
de travail de ces derniers.

Le tableau de bord a ainsi pris la forme d'une webapp traditionnelle,
permettant de jongler d'un outil à l'autre.