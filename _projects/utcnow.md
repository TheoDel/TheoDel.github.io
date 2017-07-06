---
lang: en
title : "UTC Now"
icone: "utcnow.jpg"
order: 6

desc : "A shared agenda mobile app for UTC"
headerimage: "utcnow/header.jpg"
displaydate: "Spring 2016"
context: "Université de Technologie de Compiègne"
team: "In a 4 students group, my missions were mainly centered on the sketching and structure of the app."

projectcategories:
   - name : dev
     size : 3
   - name : ux
     size : 2
   - name : ui
     size : 2
   - name: mobil

technologies:
   - invision
   - ionic
   - htmlcss
   - angularjs


---

**UTC Now** is a **mobile application** project. This agenda centralizes all the
events occuring at the University of Technology of Compiègne. They can come from
institutional events, timetables, associations, or even suggested by students themselves.

The goal was to offer a centralized and live representation of the multiple events,
encouraging serendipity and facilitation the organization of students life with this platform.

---

## Project Methodology

### Concept and prior study

With our initial idea, we collected the **ideas and expectations of students**,
with an **online survey**. We drew some complementary ideas that could be developed
in future updates (view the available classrooms, parking spaces...)

<img src="utcnow/notes.jpg" class="img-responsive" alt="Maquettes de l'appli">

### Wireframing
The sketching of the app screens was made with the reflexion about elements
structures and the basic features. I then used inVision to simulate the behaviour
of the application use.

<div class="thumbnail">
      <img src="utcnow/archi.png" class="img-responsive" alt="Maquettes de l'appli">
      <div class="caption">
        <p>Wireframes and interactions on the main screens</p>
      </div>
</div>

### Development
The development was made with Ionic, for it multiplatform deployment sufficient
for our needs and the popularity of this framework. At the same time, a part
of the team developed an API for the events data, and a server made to retrieve
the events on the UTC website and databases.

<div id="carousel-utcnow-final" class="carousel slide" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li data-target="#carousel-utcnow-final" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-utcnow-final" data-slide-to="1"></li>
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner" role="listbox">
    <div class="item active">
      <img src="utcnow/final1.jpg" alt="Aperçus de la réalisation">
      <div class="carousel-caption">
      </div>
    </div>
    <div class="item">
      <img src="utcnow/final2.png" alt="Aperçus de la réalisation">
      <div class="carousel-caption">
      </div>
    </div>
  </div>

  <!-- Controls -->
  <a class="left carousel-control" href="#carousel-utcnow-final" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#carousel-utcnow-final" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
