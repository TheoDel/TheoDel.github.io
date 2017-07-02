---
title : "Quicook"
icone: "discook.png"
mention: <div class="mention alert alert-info"><i class="fa fa-flask" aria-hidden="true"></i><span class="hidden-xs">&nbsp;Work in progress...</span></div>
order: 17

desc : "Une table interactive pour cuisiner ensemble"
headervideo: "https://www.youtube.com/embed/bGq3nKR4AAc"

displaydate: "Automne 2016"
context: "Université de Technologie de Compiègne"
team: "Ce projet a été réalisé avec Maya Verdier et Ziming Xu."

projectcategories:
   - name : study
   - name : dev
   - name : ux
   - name : ui
   - name : product

technologies:
   - unity

---

<div class="alert alert-info"><p><i class="fa fa-flask" aria-hidden="true"></i>
&nbsp; Ce projet est actuellement en développement !</p>
</div>

QUICOOK est un dispositif de réalité augmentée pour la cuisine. Il permet
de préparer une recette en suivant des instructions projetées sur le plan
de travail. La juxtaposition des étapes à suivre à côté des gestes de
l'utilisateur fait en temps réel indique la marche à suivre et enseigne
par démonstration. L'élaboration de la recette peut être réalisée par
plusieurs participants en même temps. Le dispositif distinguera l'avancement
de chacun d'eux. La notion de partage dans ce projet est donc double. Au-delà
du partage de recette qu'apporte les réseaux type réseaux sociaux, par du
texte, image ou vidéo, Quicook permet en plus une confection collaborative
de la recette. Ce dispositif est particulièrement adapté pour des ateliers
de cours de cuisine en groupe.

Une caméra et un vidéo projecteur sont fixés au-dessus du plan de travail.
L'interaction homme machine passe par des capteurs posés sur le plan de
travail et sur les ustensiles. La caméra suit chaque capteur et le vidéo-projecteur
fournit les informations, texte ou vidéo de démonstration, au fur et à
mesure de l'avancement de la recette. L'utilisateur n'a plus qu'à suivre
les indications projetées au plus près de son geste et perfectionner sa
pratique par imitation.

## Méthodologie

### Recherche et inspiration

A quoi pourrait ressembler le plaisir de cuisiner demain ? A l'heure où les
objets connectés, plus ou moins convaincants, veulent se multiplier, nous
avons voulu explorer un aspect souvent délaissé, celui du partage, de la
collaboration lors de la confection, de la transmission du savoir-faire
culinaire.

Tout d'abord nous avons observé les usages en situation, dans la vie de tous les jours, puis
organisé en groupe une scéance de brainstorming autour du sujet de la
cuisine, pour y trouver l'inspiration. Nous en avons tiré deux personas
proches des préoccupations que nous souhaitions aborder.

(brainstorming, persona)

### Scénarisation de situations

Nous nous sommes concentré sur un objet de l'apprentissage et de la préparation,
le support de la recette (livre, ordinateur, tablette...), et avons dessiné des
courts scénarios des problèmes que nos personnas pourraient rencontrer avec, ainsi
que le scénario idéal pour résoudre ce problème "dans le meilleur des mondes".
Les difficultés à comprendre des indications, le manque de place sur un
plan de travail, la rupture constante entre la lecture d'une recette et son
application, autant de petites gênes identifiées dans cette étape.

Enfin, la dernière étape a été de proposer des solutions concrètes et réalisables
indépendemment les unes des autres pour toutes ces frustrations. Des concepts
similaires se dégagaient néanmoins de ces idées, que nous avons regroupées pour
baser nos concepts.

(scénario, tableau)


### Concepts

Afin de mieux guider l’usager dans sa recette, nous souhaitons rendre ses
mouvements identifiables , mais il faut aussi un moyen de retourner l'information.
Nous voulions aussi que tirer parti de la dimension communautaire en permettant
de partager des astuces ou de nouvelles recettes, et que ces dernières soient
dynamiquement adaptées à la situation de l'utilisateur : ingrédients en
réserve, régime alimentaire particulier, etc...

Deux principales idées ont émergées de la scénarisation :

- Des pastilles à fixer sur chaque ustensile avec des capteurs pour transmettre
les informations : cette idée était particulièrement innovante car cette
atomisation de capteurs n’a pas encore été observée dans un contexte de cuisine.
Elle semblait néanmoins matériellement complexe à mettre en oeuvre et a été mise de côté
- Un plan de travail reconnaissant des interactions simples avec une caméra
et projetant des informations : ce concept a été gardé, en ajoutant des QR codes
sur les ustensiles afin d'en déterminer la position. Représenter une recette
sur un plan spatialisé et de façon temporelle permet de donner la bonne
information au bon moment. On peut aussi du coup représenter des tâches
qui peuvent être faites en même temps par différentes personnes

La veille de l'existant nous a fait trouver des projets similaires par exemple
chez [IKEA](https://www.youtube.com/watch?v=qD60cBQOABY) ou
[Whirlpool](https://www.youtube.com/watch?v=rYiD8PBDpOk), qui furent une
intéressante source d'inspiration. Nous nous en distinguons néanmoins
par notre parti-pris collaboratif et la faisabilité technique immédiate
de notre concept.

### Prototypage des interactions et de l'interface

Pour imaginer concrètement quelles interactions pourraient être disponibles
sur la table, nous avons prototypé, avec un tableau à feutre et des accessoires,
quelles pourraient être les étapes de la réalisation d'une recette avec notre dispositif.

(Tableau à plat)
(Gif ?)

Ces étapes ont ensuite été formalisées plus précisément sous la forme d'un
"flow" d'application, précisant les interactions disponibles selon la situation.


(Papier Flow de l'app)

### Tests d'utilisation

Nous avons rapidement fait tester à des premières personnes notre concept pour
recueillir leurs impressions sur le concept, la logique et l'intuitivité des interactions. Sur le
même principe que notre première réalisation, nous avons utilisé le "prototype tableau".
Selon les actions de nos testeurs avec leurs accessoires de cuisine,
nous dessinions sur le tableau les changements d'interface.

( Tableau 2)

Pour les testeurs, nos interactions étaient trop dirigistes et contraignantes :
par exemple, nous avions oublié de prendre en compte la place des accessoires
inutilisés et ils souhaitaient plus de flexibilité dans la façon de procéder.

En tenant compte de ces retours, nous avons modifié le flot d'interaction
afin de créer un premier prototype plus tangible.
(Mes Papiers)

### Prototype de MVP et présentation

- Afficher

<div class="thumbnail">
      <img src="quicook/demo2.jpg" class="img-responsive" alt="Photo de Démonstration du prototype">
      <div class="caption">
        <p>Démonstration du concept et du prototype lors des journées portes ouvertes à l'ESAD (école supérieure d’art et de design) d'Amiens</p>
      </div>
</div>