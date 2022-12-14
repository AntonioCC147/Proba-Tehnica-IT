#### Proiect realizat de către Crantea Antonio Cristian pentru Departamentul de IT din cadrul LSAC - Decembrie 2022

# Prefață:

- Autoevaluarea reprezinta un element esențial atunci când încerci să faci o analiză asupra dezvoltării tale, bazate atât pe lucrul individual, cât și pe munca în echipă. Astfel ca, fiind cât se poate de obiectiv și realist, sunt conștient ca sunt departe de a fi un software developer bun, dar sunt mult mai aproape decât **"Eu"**, cel de acum un an.
- Numele meu este **Crantea Antonio Cristian**, sunt student în anul I la **Ingineria Sistemelor**, iar acest proiect m-a făcut să realizez cât de multe pot să fac într-un timp atât de scurt. M-a făcut să arăt că și eu pot să realizez ceva frumos cu propriile puteri, dar mai ales mi-a întărit convingerile cu privire la dorințele mele, respectiv de a face parte dintr-o comunitate în care să mă pot dezvolta, să învăț și să duc aceste obiceiuri mai departe.
- La venirea în facultate, cunoștințele mele din acest domeniu erau aproape nule. Nu cunoșteam aproape deloc **HTML**, iar partea de backend reprezenta ceva ce numai **"IT-iști adevărați"** știau să o facă. Pe parcursul proiectului, consider că mi-am dezvoltat câtuși de puțin soft skill-urile și am devenit o versiune mai bună decât eram.
- Am început lucrarea la acest proiect chiar din data de **26 noiembrie**, atunci când i-am dat mesaj mentorului meu, citez: "M a luat panica", "Ma simt paralel", după care am lucrat constant la el, cu mici pauze scurte întrucât trebuia să repet pentru parțiale.
- Proiectul, o dată descărcat, conține trei mari secțiuni: **"backend"**, acolo unde se regăsesc toate fișerele necesare pentru partea de backend, **"frontend"**, acolo unde se găsește întreg codul **HTML** pentru site, **CSS-ul**, dar și un folder care conține **imaginile** pe care le-am utilizate, dar și un **"readme"**, unde deja vă aflați.
    
# Tehnologii utilizate:

Pentru realizarea proiectului, am folosit:
1. **Frontend: HTML, Bootstrap, CSS**;
2. **Backend: PostMan, MongoDB, Mongoose, JavaScript (NodeJS)**;

Codul întregului proiect a fost realizat în **"Visual Studio Code"**, fiind totodată și prima dată când am utilizat această aplicație.

# Task-uri:

I. **FRONTEND**
1. **Navbar:**
	Navbar-ul reprezintă primul lucru cu care am început să lucrez, în ciuda celor recomandate. Am reușit să fac pentru prima dată un navbar aproximativ funcțional, întrucât până acum nu mai lucrasem cu așa ceva. Am reușit să-l fac să se mențină pe tot parcursul scroll-ului și am reușit să fac și cele două casete de "Logare", respectiv "Creare cont".
		De asemenea, navbar-ul a fost cel mai greu lucru din partea de frontend. Nu reușeau să-l poziționez corect, să mențin logo-ul în partea stângă și nici să se plimbe pe tot parcursul navigării, însă, cu ajutorul sfaturilor de la mentor, dar și internet, am dus totul până la capăt, într-un final.

2. **Landing page:**
		Connsider că am reușit să fac site-ul să arate ca în mockup-ul impus de către temă. Am respectat culorile, fonturile, dimensiunile și am încercat pe cât posibil să fac ca până și butonul de la căsuțele de logare / creare cont să conțină butoanele din exemplu. Mă consider un om perfecționist, de aceea detaliile mici contează. Chiar pe ultima sută de metri am observat că pusesem butonul de Facebook de tip "fa-facebook" în loc de "fa-facebook-official", astfel că am modificat. Butonul de "Upload a meme" trimite utilizatorul către căsuța de încărcare a meme-urilor, așa cum a fost specificat.
		De asemenea, prima dată am putut și am învățat să folosesc "Grid System", întrucât nu înțelegeam cum pot secționa un site pe mai multe părți.

3. **Login / Register:**
		Am făcut castele de logare / înregistrare să se deschidă pe centrul ecranului, adăugând și efectul de umbră cerut. Atunci când se apasă oriunde pe ecran, acestea se închid.

4. **Formular de upload imagini:**
		Am realizat coborârea în jos a paginii la apăsarea butonului "Upload a meme".

5. **Footer:**
		Footer-ul mi s-a părut cea mai ușoară parte. Am îndeplinit acest task cu ușurință și consider că l-am făcut exact așa cum a trebuit. Butoanele deschid noi pagini care conțin link-urile impuse de proiect.

6. **Responsivitatea design-ului:**
		Acest task a reprezentat o adevărată provocare, întrucât nu mai lucrasem cu așa ceva până acum. Am învățat care este faza cu padding-ul, margin, alinieri și așa mai departe. Am încercat să fiu atent până și la cele mai mici detalii, deci, în mare parte, consider că site-ul este "responsive", cu mici scăpări, însă eu sunt foarte mândru de ce am realizat.

**(!) Alte precizări:**
		Pentru partea de aspect, am definit în mare parte singur clasele în CSS, oferindu-le totodată un nume sugestiv pentru a și înțelege exact care ce face. Am respectat fonturile și dimensiunile date de mockup, cu mici modificări pentru a putea realiza responsive-ul și am încercat să le fac în așa fel încât, ori de câte ori am nevoie, să le pot "apela".
	
II. **BACKEND:**
1. **DB schema for users:**
		Am reușit să definesc două "models" și două "routes", câte una din fiecare pentru entitatea "user", iar celelalte pentru entitatea "meme". Întrucât ID-ul se genera automat de baza de date, nu l-am mai trecut în "model", în schimb am adăugat și data exactă.

2. **CRUD - Create, Read, Update, Delete:**
		POST /memes a fost primul CRUD pe care l-am creat și drept să spun, mi s-a părut dificil la început. O dată definit corect, lucrurile mi s-au părut mai clare și deci implementarea celorlalte a venit aproximativ, cu mici ajutări, de la sine.
		GET /memes și GET /memes/:id am reușit să le fac să funcționeze destul de rapid, după cum am spus mai sus, nefiind prea complicat, întrucât sintaxa era aproximativ asemănătoare.
		PATCH /memes a fost, de asemeneam, destul de provocator de rezolvat. Aici deja începeam să fac lucrurile singur, fără să mai caut sau să mai întreb până și cele mai mici lucruri, întrucât totul părea să aibă sens.
		DELETE /memes/:id a fost favoritul meu. Mi s-a părut interesant de făcut, iar când am văzut că într-adevăr funcționează, mi-a umplut inima de bucurie.

3. **Register & Login:**
		Pentru acest task am încercat mai mult să definesc mici părți din totalul pe care trebuia să-l fac, cât am reușit.

4. **Input Validation:**
		Am încercat să fac validare pentru nume, parolă și email după cerință. Nu am apucat să leg prea mult această validare de site, însă am decis că mai bine încerc să las ceva în filă, decât să nu mă ating de task.

5. **Protected Endpoints / 6. BONUS: File Upload:**
		Spre rușinea mea, nu am putut să realizez absolut nimic din aceste task-uri.

**(!) Alte precizări:**
		Am încercat exact ca la partea de frontend, anume să fac totul să fie cât mai sugestiv și ușor de înțeles pentru cine citește codul. Recunosc că mai sunt lucruri pe care le pot îmbunătăți, evident, însă per total am înțeles, zic eu, aspecte importante din această parte.

# Rularea aplicațiilor:

Pentru a putea rula și vizualiza local întreg conținutul proiectului, trebuie descărcat de pe Github. După acest pas, dezarhivați folderul pe calculator, ulterior având acces la toate fișerele sursă.

I. **FRONTEND**
- Pentru a vizualiza site-ul, tot ce trebuie să faceți este să vă duceți în folderul "frontend" și să accesați fișierul "MEMEIT". Ulterior, pagina web se va deschide și veți avea acces la interfața paginii, putând vedea codul deschizând fișierul în format ".txt", sau cu ajutorul aplicației "Visual Studio Code".

II. **BACKEND**
- Pentru partea de back veți avea nevoie să instalați "PostMan" (pentru testarea API) și "MongoDBCompass" (pentru comunicarea cu baza de date). Conexiunea dintre cele două aplicații și partea de backend se poate realiza cu ajutorul "Visual Studio Code", tastând comanda "npm start" pentru a porni baza de date, doar atunci când vă aflați în folderul "backend". Pentru a ajunge acolo, este necesară doar trimiterea către aceea cale de acces cu ajutorul comenzii "cd .\backend\".

# Concluzii & Impresii:
- Cum v-am spus mai sus, acest proiect a reprezentat un mic impuls spre dezvoltarea mea privind tot ceea ce înseamnă domeniul IT.
- Task-urile mi-au stârnit interes, dar și nervi și frustrări, (de ce să nu recunosc?), întrucât presiunea s-a resimțit din plin.
- Am încercat să fiu perfecționist până am realizat că perfecțiunea nu reprezenta ceva specific, ci consta în îndeplinirea unui task în felul meu, în special dacă nu mai avusesem de a face cu asemenea lucruri până la momentul respectiv.
- Pe partea de frontend am reușit să-mi îmbunătățesc puținele lucrurile pe care deja le știam și am învățat o mulțime de alte elemente cu care nu mai lucrasem până acum, respectiv navbar-ul, împărțirea unei pagini web, design-ul propriu-zis și multe alte aspecte ce țineau de îmbunătățirea codului, chiar și code styling.
- Pe partea de backend am început "de la -1", cum îmi mai place mie să spun ca să scot în evidență clar că nu aveam habar de absolut nimic din acest domeniu. Cu puțin ajutor din partea mentorului, am reușit să duc la capăt câteva dintre task-uri, dar am învățat și să caut acolo unde trebuie pentru a găsi ce am nevoie.
- De asemeneam, printre rânduri v-am lăsat și puținele dintre motivele pentru care îmi doresc să continui ca membru LSAC în acest departament, iar ca o paranteză, CV-ul chiar nu este unul dintre ele.
- Nu în ultimul rând, doresc să vă mulțumesc pentru șansa de a participa la acest proiect, dar în special doresc să îi mulțumesc  mentorului meu, Andrei Mărunțiș, pentru tot suportul acordat pe parcursul probei, dar și pentru că a reușit să mă suporte în totacest timp!
