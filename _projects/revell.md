---
lang: en
title : "revell"
icone: "revell.jpg"
mention: <div class="mention alert alert-danger"><i class="fa fa-trophy" aria-hidden="true"></i><span class="hidden-xs">&nbsp;Laval Virtual Award</span></div>
order: 7

desc : "Alternative perception experience in Virtual Reality"
headervideo: "https://www.youtube.com/embed/u3QTF0o8uU0"

displaydate: "Fall 2015"
context: "Université de Technologie de Compiègne"
team: "This project was made with Aurélien Delval. We both conceptualized the concept and I had to develop it."

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
How to get your bearings in a space you can only perceive through your movements ?

**revell** is a **virtual reality** project where the user is immerged in
an environment with invisible surfaces. Without their usual senses,
they can reveal the surrounding world through physical gestures and actions:
The surfaces are initially invisible, but when the user hands touch them, they
become visible. The perceptive feedback is then visual and not haptic.

<div class="alert alert-danger"><p><i class="fa fa-trophy" aria-hidden="true">
</i>&nbsp;<b>revell</b> won the <b>Prix "Virtual Fantasy award" at <a href="http://www.laval-virtual.org/">Laval Virtual</a></b>.</p>
<p>Laval Virtual is a leader international exhibition on virtual technologies and uses.
Our project was presented during the exhibition, then awarded among a dozen student
projects in the demo category. The jury loved the original physical and cognitive
engagement our project transmits !</p>
</div>

Technically, we used Razer Hydra controllers, reproducing the hand movements and positions
in the virtual environment. Finally, the Oculus Rift is used to transcribe head movements
on the avatar.

---

## Project Methodology

### Searching a concept

Inspired by the cognitive sciences theories about spatial perception, we
wanted to build an experience where the user would have a perception similar to
a blind person. He should then use now movements to be guided.

<div class="thumbnail">
      <img src="revell/drawconcepts.jpg" class="img-responsive" alt="Concepts sketches">
      <div class="caption">
        <p>Sketches of the imagined concepts : reveal surfaces by (virtual) touch,
         use the echo sound, subdivide the world in voxels... (Drawings from A.Delval)</p>
      </div>
</div>

### Development
Considering our technical and temporal constraints, we reduced the interactions
to the most important : touching surfaces with the virtual hands. The game engine
a been then developed with Unity3D.

<div class="thumbnail">
      <img src="revell/development.jpg" class="img-responsive" alt="Development previews">
      <div class="caption">
        <p>The world modeled on Unity, the result of it transformation into
        cubes (voxels), the collision zones on the player and the first real time
        screenshots of the game.</p>
      </div>
</div>

### User testing
To collect the players feelings, we ma

Pour recueillir les ressentis que pouvaient avoir les joueurs, we did test with
voluntary. With these observations, we saw adjustments were needed, just as the
need of a tutorial to discover the commands.
This feedback contributed to an enhanced version, presented at Laval Virtual.

<div class="thumbnail">
      <img src="revell/usertesting.jpg" class="img-responsive" alt="Aperçus du développement">
      <div class="caption">
        <p>User testing session</p>
      </div>
</div>
