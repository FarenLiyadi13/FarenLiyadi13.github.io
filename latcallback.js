$('.search-button').on('click', function(){

    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=fa9651fd&s=' + $('.input-keyword').val(),
        success: ((results) => {
            const film = results.Search;
            const sisip = document.querySelector('.sisip');
            let cards ='';
            film.forEach((e)=>{
                cards += showCards(e);
            
            });
            // $('.sisip').html(cards); //carasimplepakejquery
            sisip.innerHTML = cards;
            console.log(cards);
    
    
            // ketika tombol diklik
            $('.modal-detail-button').on('click', function(){
                // console.log($(this).data('imdbid'));
                $.ajax({
                    url: 'http://www.omdbapi.com/?apikey=fa9651fd&i=' + $(this).data('imdbid'),
                    success: e => {
                        const movieDetail = showMovieDetail(e);
                    $('.modal-body').html(movieDetail);
                    },
                    error: ((e)=> {
                        console.log(e.responseText)
                    })
                })
            })
        }),
        error: ((e)=> {
            console.log(e.responseText)
        })
    })

});




function showCards(e){
 return`<div class="col-md-4 my-3">
 <div class="card">
     <img src="${e.Poster}" class="card-img-top" alt="${e.Title}">
     <div class="card-body">
       <h5 class="card-title">${e.Title}</h5>
       <h6 class="card-subtitle mb-2 text-muted">${e.Year}</h6>
       <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" 
       data-bs-target="#movieDetailModal" data-imdbid="${e.imdbID}">Details</a>
     </div>
   </div>
</div>`
};

function showMovieDetail(e){
   return ` <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-3">
                            <img src="${e.Poster}" class="img-fluid" alt="">
                        </div>
                        <div class="col-md">
                          <ul class="list-group">
                              <li class="list-group-item"><h4>${e.Title} (${e.Year})</h4></li>
                              <li class="list-group-item"><strong>Director : </strong> ${e.Director}</li>
                              <li class="list-group-item"><strong>Writer : </strong> ${e.Writer}</li>
                              <li class="list-group-item"><strong>Actors : </strong> ${e.Actors}</li>
                              <li class="list-group-item"><strong>Plot : </strong> ${e.Plot}</li>
                            </ul>
                        </div>
                    </div>
                </div>`;
}