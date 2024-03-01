document.addEventListener('DOMContentLoaded', function() {

    //Creo lista de objetos de las peliculas de mi html
    const movies = [
        {
            imgSrc: "data:image/jpeg;base64,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  ",
            title: "Nueve Reinas" ,
            year: 2000,
            description: "Se trata de un negocio urgente que se desarrolla en un mundo lleno de ladrones y farsantes, donde nadie está libre de su dosis de corrupción. En poco más de 24 horas, Marcos y Juan intentarán vender unos sellos conocidos como las Nueve Reinas, raras piezas que un rico empresario desea adquirir para su colección."
        },
        {
            imgSrc: "https://pics.filmaffinity.com/argentina_1985-430372554-large.jpg",
            title: "Argentina 1985",
            year: 2022,
            description: "ARGENTINA, 1985, narra la historia real del juicio a los miembros del régimen de la dictadura militar del país. Los fiscales Julio Strassera (Ricardo Darín) y Luis Moreno Ocampo (Peter Lanzani) tienen la misión de condenar a los líderes del derrocado régimen fascista argentino por crímenes contra la humanidad."
        },
        {
            imgSrc: "https://pics.filmaffinity.com/la_odisea_de_los_giles-274529633-mmed.jpg",
            title: "La odisea de los giles",
            year: 2019,
            description: "Un grupo de vecinos se organiza para llevar a cabo un provecto que ayude a paliar la crisis. Sin embargo en medio de este corralito en el que son víctimas de un abogado y un banquero, se organizarán para planear cómo recuperar sus ahorros."
        },
        {
            imgSrc:"data:image/jpeg;base64,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",
            title: "el secreto de sus ojos",
            year: 2009,
            description: "Durante 25 años, un crimen ha permanecido, imborrable, en la memoria de Benjamín Espósito. Ahora, en su madurez, decide volver sobre esa historia; recorrer de nuevo aquel pasado de amor, muerte y amistad. Pero esos recuerdos, puestos en libertad, repasados unas mil veces, cambiarán su visión de ese pasado."
        },
        {
            imgSrc: "https://es.web.img3.acsta.net/c_310_420/pictures/18/10/16/10/54/4060463.jpg ",
            title: "El angel",
            year: 2018,
            description: "El Ángel está inspirada en la vida de Carlos Eduardo Robledo Puch, el asesino múltiple más famoso de la historia criminal argentina."
        },
        {
            imgSrc: "https://es.web.img3.acsta.net/pictures/14/11/17/11/15/381594.jpg ",
            title: "Relatos Salvajes",
            year: 2014,
            description: "La película gira en torno a seis historias autoconclusivas, cuyo nexo entre ellas es siempre la violencia. Los personajes están sometidos a diferentes situaciones de la vida cotidiana y el destino los conduce a un final loco y absurdo. El filme está dividido en seis cortometrajes."
        },
        {
            imgSrc: "https://pics.filmaffinity.com/El_patraon_Radiografaia_de_un_crimen-806545083-large.jpg ",
            title: "El patron",
            year: 2015,
            description: "Un humilde peón de campo encuentra trabajo de carnicero en la gran ciudad. Su patrón es un siniestro personaje dueño de una cadena de carnicerías que lo obliga a vender carne en mal estado al tiempo que lo sumerge en una verdadera esclavitud. ¿Hasta dónde es posible explotar a un hombre?"
        },
        {
            imgSrc: "https://pics.filmaffinity.com/Nieve_negra-228454480-large.jpg",
            title: "Nieve negra",
            year: 2017,
            description: "Nieve negra cuenta la historia de Salvador, un hombre que vive aislado en su cabaña en la Patagonia. Tras décadas sin verse, su hermano Marcos y su mujer Laura, que está embarazada, vuelven de España para convencerle de vender las tierras que comparten por herencia de su padre."
        },
        {
            imgSrc: "https://pics.filmaffinity.com/El_robo_del_siglo-683536953-large.jpg",
            title: "El robo del siglo",
            year: 2020,
            description: "En 2006, un grupo de ladrones llevó a cabo uno de los atracos más famosos e inteligentes de la historia argentina al robar una sucursal del Banco Río."
        },
        {
            imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/6dd930f8dbae50bc012bb1633d55c7ec37cda9562725381803b6a74d7e35a31c.jpg",
            title: "Inseparables",
            year: 2010,
            description: "Felipe, un empresario adinerado que ha quedado tetrapléjico debido a un accidente, está buscando a un asistente terapéutico. Se presentan varios muy calificados, pero él decide tomar a Tito, el ayudante de su jardinero, que ha decidido renunciar."
        },
    ]
       
    
    console.log(location.href);
    
    const movieList = document.getElementById("movie-list"); // Obtener el elemento principal de la lista
    const searchInput = document.getElementById("searchInput"); // Obtener el elemento de búsqueda por titulo
    const searchButton = document.getElementById("searchButton"); //Obtener el boton y agregar el evento click + la funcion de las listas
    searchButton.addEventListener("click", handleSearch); 
    
    
    
    // Recorrer el array de películas para que aparezcan en el HTML y crear las etiquetas
    for (let i = 0; i < movies.length; i++) {
        // Crear elementos HTML dinámicamente
        const ul = document.createElement("ul");
        const li = document.createElement("li");
        const img = document.createElement("img");
        const button = document.createElement("button");
        const h2 = document.createElement("h2");
        const span = document.createElement("span");
    
        // Configurar los atributos y contenido de los elementos
        img.src = movies[i].imgSrc; //establece la fuente de la imagen en el elemento de imagen recién creado según la URL 
        img.alt = movies[i].title;
        h2.textContent = movies[i].title;
        button.textContent = "Resumen";
        button.classList.add("modal-button"); // Añadir una clase para seleccionar botones de modal
        span.textContent = movies[i].year;
    
        // Agregar y ubicar elementos al árbol DOM
        li.appendChild(img);
        li.appendChild(h2);
        li.appendChild(button);
        li.appendChild(span);
        ul.appendChild(li);
        movieList.appendChild(ul);
    }
    
    
    //Resumen de las peliculas por modal
    const modalButtons = document.querySelectorAll('.modal-button');
    
        // Agregar evento clic a cada botón de resumen
        modalButtons.forEach(button => {
            button.addEventListener('click', function () {
                const movieIndex = Array.from(button.parentElement.parentElement.parentElement.children).indexOf(button.parentElement.parentElement);
                showModal(movies[movieIndex].title, movies[movieIndex].description);
            });
        });
    
        function showModal(title, description) {
            alert(`Resumen de "${title}":\n\n${description}`);
        }
    
    
    
    // Función para manejar el evento de búsqueda POR TITULO
    function handleSearch(event) {
        event.preventDefault(); // Prevenir la recarga de la página por defecto
    
        const searchTerm = searchInput.value.toLowerCase();
        const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
    
        // Crear una cadena HTML con las películas filtradas con map
        const htmlString = filteredMovies.map(movie => `
            <ul>
                <li>
                    <img src="${movie.imgSrc}" alt="${movie.title}">
                    <h2>${movie.title}</h2>
                    <button class="modal-button">Resumen</button>
                    <span>${movie.year}</span>
                </li>
            </ul>
        `).join(''); //Join crea todo en una subcadena 
    
        // Asignar la cadena HTML a movieList
        movieList.innerHTML = htmlString || '<p style="color: red; text-align: center; font-weight: bold; width: 100%;">No se encontraron películas.</p>';
    
        // Reemplazar la búsqueda en la URL sin recargar la página
        const searchUrl = `${encodeURIComponent(searchTerm)}`;
        window.history.replaceState({ search: searchTerm }, null, searchUrl);
    }
    
    
    
    //Buscador de peliculas POR AÑO
    const yearFilter = document.getElementById("yearFilter");
    const buttonYear = document.getElementById("buttonYear");
    buttonYear.addEventListener("click", seachYear)
    
    function seachYear() {
        const selectedYear = parseInt(yearFilter.value);
        const searchTerm = searchInput.value.toLowerCase();
    
        const filteredMoviesYear = movies.filter(movie => movie.year === selectedYear && movie.title.toLowerCase().includes(searchTerm));
    
        // Crear una cadena HTML con las películas filtradas por año usando map
        const htmlString = filteredMoviesYear.map(movie => `
            <ul>
                <li>
                    <img src="${movie.imgSrc}" alt="${movie.title}">
                    <h2>${movie.title}</h2>
                    <button class="modal-button">Resumen</button>
                    <span>${movie.year}</span>
                </li>
            </ul>
        `).join('');
    
        // Asignar la cadena HTML a movieList
        movieList.innerHTML = htmlString || '<p style="color: red; text-align: center; font-weight: bold; width: 100%;">No se encontraron películas con ese año.</p>';
         
        // Reemplazar la búsqueda en la URL sin recargar la página
         const searchUrl = `${encodeURIComponent(searchTerm)}`;
         window.history.replaceState({ search: searchTerm }, null, searchUrl);
    }
    
    
    //Agregar peliculas 
    function renderMovies(movies) {
        // Obtener el elemento de la lista de películas
        const movieList = document.getElementById("movie-list");
    
        // Limpiar la lista antes de renderizar las películas
        movieList.innerHTML = "";
    
        // Recorrer el array de películas y crear elementos HTML para cada una
        movies.forEach(function(movie) {
            const ul = document.createElement("ul");
            const li = document.createElement("li");
            const img = document.createElement("img");
            const button = document.createElement("button");
            const h2 = document.createElement("h2");
            const span = document.createElement("span");
    
            img.src = movie.imgSrc;
            img.alt = movie.title;
            button.textContent = "Resumen";
            button.id = "resumen-btn"
            h2.textContent = movie.title;
            span.textContent = movie.year;
    
            li.appendChild(img);
            li.appendChild(h2);
            li.appendChild(button)
            li.appendChild(span);
            ul.appendChild(li);
            movieList.appendChild(ul);
        });
    }
    
    const movieNew = document.getElementById("formMovie");
    
    movieNew.addEventListener("submit", function(event) {
        event.preventDefault();
    
        //Obtengo los valores del form 
        const title = document.getElementById("title").value;
        const imgSrc = document.getElementById("imgSrcInput").value;
        const description = document.getElementById("description").value;
        const year = parseInt(document.getElementById("year").value);
    
        if (title && imgSrc && description && !isNaN(year)) {
            
            const newMovie = {
                title: title,
                imgSrc: imgSrc,
                year: year,
                description: description
            };
    
            movies.push(newMovie);
    
            renderMovies(movies);
    
            movieNew.reset();
        } else {
             // Mostrar un mensaje de error si algún campo está vacío
             alert("Todos los campos son obligatorios. Por favor, completa el formulario.");
        }
    
    })
    
    
    });