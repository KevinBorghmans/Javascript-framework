<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Javascript Framework</title>
    <script type="text/javascript" src="/js/framework.js"></script>
    
      <script>
        window.onload = function(){
            // hiermee laat je gelijk zien in de console log het moment welk item geselecteerd is dit is nu de div en je voegt een class toe aan de div. je kan ook andere elementen eraantoevoegen en deze veranderd hij gelijk in de html.
            console.log($('div').add('class', 'testing').html())
            // met deze fucntie registreerd de library de click op de div en laat hem in de console log zien.
            $('div').on('click', function(event){
                console.log(event);
            })
        }
    </script>
</head>
<body>
  <div> Check for a click so click on it!</div>
</body>
</html>