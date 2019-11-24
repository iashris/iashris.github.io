$('.introscroll').click(function() {
  document.getElementById('projects_section').scrollIntoView(true);
});

function groupBy(arr, n) {
  var group = [];
  for (var i = 0, end = arr.length / n; i < end; ++i) group.push(arr.slice(i * n, (i + 1) * n));
  return group;
}
$(document).on('ready', function() {
  $.getJSON('js/dna.json', function(data) {
    const projects = data.projects.sort((a, b) => a.pos - b.pos);
    const publications = data.publications;
    const conferences = data.conferences;
    const internships = data.internships;
    const awards = data.awards;

    const iw = window.innerWidth;
    const numInRow = iw < 768 ? 1 : iw < 992 ? 2 : 3;
    const batched = groupBy(projects, numInRow);
    const html = batched
      .map(function(row) {
        const internalprojs = row
          .map(function(proj) {
            return `<div class="col-md-4 col-sm-6 col-xs-12 pitem pitema vizu">
            <div class="linkt">
                <a href="${proj.link}">
                    <img class="portfolioimage" src="${proj.src}">
                    <span class="proname">${proj.name}</span>
                    <span class="prometa">${proj.meta}</span>
                </a>
            </div>
                <span class="procat">${proj.desc}</span>
        </div>`;
          })
          .join('');
        return `<div class="row switchrow" data-aos="fade-up">${internalprojs}</div>`;
      })
      .join('');
    $('#ppp').html(html);

    const pub = publications
      .map(function(pb) {
        return `<h4><b>${pb.name}</b>| <a href="${pb.link}">Link</a></h4>
      <p>${pb.authors}<br><em>${pb.place}</em></p>
      <br>`;
      })
      .join('');
    $('#ppp_publications').html(pub);

    const inthtml = internships
      .map(function(int) {
        return `<div class="interntitle"><a href="${
          int.website
        }"><img src="img/${int.logo}" height="30" class="internlogo"></a><h4><b>${int.position} | ${int.time}</b></h4>
      </div>
      <p>${int.desc}</p>
      <br/>`;
      })
      .join('');

    $('#ppp_internships').html(inthtml);

    const confhtml = conferences
      .map(function(cf) {
        return `,<div class="interntitle"><a href="${
          cf.link
        }"><img src="img/${cf.img}" height="42" class="conflogo"></a><h4><b>${cf.name} | ${cf.place}</b></h4>
      </div>
      <p>${cf.desc}</p>
      <br/>`;
      })
      .join('');
    $('#ppp_conferences').html(confhtml);
  });
});

var toggled = 0;

$('.potato').click(function() {
  $('.pitem').addClass('hidden');
  $('.pitem').removeClass('pitema');
  $('.elec').removeClass('hidden');
  $('.switchrow').removeClass('row');
});

$('.xall').click(function() {
  $('.pitem').removeClass('hidden');
  $('.pitem').addClass('pitema');
  $('.switchrow').addClass('row');
});

$('.jumpro').click(function() {
  $('html, body').animate(
    {
      scrollTop: $('.thumbnails').offset().top,
    },
    1600,
  );
});

$('.abme').hide();

function hojao() {
  toggled++;
  if (toggled % 2 == 0) {
    $('.abme').hide();
    $('.toggleme').html('You can check out the other things I do <span class="fakein" onclick="hojao();">here.</span>');
  } else {
    $('.abme').show();
    $('.toggleme').html('To hide this information, click <span class="fakein" onclick="hojao();">here.</span>');
  }
}
