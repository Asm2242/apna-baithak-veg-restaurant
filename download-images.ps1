$ErrorActionPreference = "Continue"
$foodsDir = "public\images\foods"
New-Item -ItemType Directory -Path $foodsDir -Force | Out-Null

$items = @(
  @{ slug="schezwan-noodles"; q="vegetarian Schezwan noodles spicy red sauce restaurant plating" },
  @{ slug="hakka-noodles"; q="vegetarian Hakka noodles wok tossed restaurant photography" },
  @{ slug="singapuri-noodles"; q="vegetarian Singapore noodles curry spice restaurant plating" },
  @{ slug="chilli-garlic-noodles"; q="vegetarian chilli garlic noodles garlic red chilli restaurant" },
  @{ slug="paneer-noodles"; q="paneer noodles vegetables wok restaurant photography" },
  @{ slug="veg-noodles"; q="vegetable noodles colorful vegetables restaurant plating" },
  @{ slug="schezwan-fried-rice"; q="vegetarian Schezwan fried rice spicy red restaurant plating" },
  @{ slug="paneer-fried-rice"; q="paneer fried rice vegetables restaurant photography" },
  @{ slug="veg-fried-rice"; q="vegetarian fried rice colorful vegetables restaurant" },
  @{ slug="butter-noodles"; q="butter noodles vegetarian creamy restaurant plating" },
  @{ slug="fried-rice"; q="vegetarian Chinese fried rice restaurant aesthetic" },
  @{ slug="chilli-paneer"; q="dry chilli paneer Indo Chinese restaurant plating" },
  @{ slug="chilli-potato"; q="crispy chilli potato vegetarian restaurant photography" },
  @{ slug="honey-chilli-potato"; q="honey chilli potato crispy vegetarian restaurant" },
  @{ slug="finger-chips"; q="golden crispy french fries restaurant aesthetic" },
  @{ slug="malai-chaap"; q="malai soya chaap creamy tandoori vegetarian restaurant" },
  @{ slug="chatpata-chaap"; q="chatpata soya chaap spicy vegetarian restaurant" },
  @{ slug="afghani-chaap"; q="Afghani soya chaap creamy vegetarian restaurant" },
  @{ slug="k-f-c-chaap"; q="KFC style crispy soya chaap vegetarian restaurant" },
  @{ slug="k-f-c-lajpati-chaap"; q="crispy lajpat soya chaap vegetarian restaurant" },
  @{ slug="achari-chaap"; q="achari soya chaap pickle spice vegetarian restaurant" },
  @{ slug="nagin-chaap"; q="nagin soya chaap spicy vegetarian restaurant plating" },
  @{ slug="lajpati-nagin-chaap"; q="lajpat nagin soya chaap vegetarian food" },
  @{ slug="amritsari-chaap"; q="Amritsari soya chaap tandoori vegetarian" },
  @{ slug="veg-chicken-tikka-chaap"; q="vegetarian soya chicken style tikka chaap" },
  @{ slug="pagga-daku-chaap"; q="spicy special soya chaap restaurant aesthetic" },
  @{ slug="paneer-tikka-chaap"; q="paneer tikka soya chaap vegetarian platter" },
  @{ slug="paneer-malai-tikka"; q="paneer malai tikka creamy tandoori restaurant" },
  @{ slug="paneer-kurkure"; q="crispy kurkure paneer vegetarian restaurant" },
  @{ slug="chilli-chaap"; q="chilli soya chaap Indo Chinese vegetarian" },
  @{ slug="malai-chaap-roll"; q="malai soya chaap roll Indian street food aesthetic" },
  @{ slug="chatpati-chaap-roll"; q="spicy chatpata soya chaap roll restaurant" },
  @{ slug="afghani-chaap-roll"; q="Afghani soya chaap roll creamy Indian" },
  @{ slug="achari-chaap-roll"; q="achari soya chaap roll Indian restaurant" },
  @{ slug="k-f-c-chaap-roll"; q="crispy KFC style soya chaap roll vegetarian" },
  @{ slug="jagga-daku-chaap-roll"; q="spicy special soya chaap kathi roll vegetarian" },
  @{ slug="veg-chaap-rogan-josh"; q="vegetarian soya chaap Rogan Josh Indian curry" },
  @{ slug="kadai-chaap"; q="kadai soya chaap Indian restaurant copper bowl" },
  @{ slug="kadai-paneer"; q="kadai paneer Indian restaurant aesthetic" },
  @{ slug="paneer-butter-masala"; q="paneer butter masala creamy tomato Indian restaurant" },
  @{ slug="shahi-paneer"; q="shahi paneer creamy royal Indian restaurant plating" },
  @{ slug="chaap-do-pyaza"; q="soya chaap do pyaza Indian curry restaurant" },
  @{ slug="paneer-do-pyaza"; q="paneer do pyaza Indian restaurant photography" },
  @{ slug="soya-chaap-keema"; q="soya chaap keema vegetarian Indian restaurant" },
  @{ slug="rumali-roti-1-pc"; q="rumali roti Indian restaurant food photography" },
  @{ slug="plain-rice"; q="steamed basmati plain rice Indian restaurant" },
  @{ slug="steam-momos-6-pc"; q="steamed vegetable momos bamboo steamer restaurant" },
  @{ slug="fried-momos"; q="crispy fried vegetable momos restaurant" },
  @{ slug="paneer-momos-steam"; q="steamed paneer momos vegetarian restaurant" },
  @{ slug="paneer-momos-fried"; q="fried paneer momos crispy restaurant" },
  @{ slug="paneer-momos"; q="paneer stuffed vegetarian momos aesthetic" },
  @{ slug="veg-paneer-momos"; q="mixed vegetable paneer momos restaurant platter" },
  @{ slug="soya-chaap-momos"; q="soya chaap momos vegetarian restaurant" },
  @{ slug="crispy-momos"; q="crispy fried veg momos restaurant photography" },
  @{ slug="tandoori-momos"; q="tandoori vegetable momos smoky restaurant" },
  @{ slug="tandoori-paneer-momos"; q="tandoori paneer momos vegetarian restaurant" },
  @{ slug="tandoori-momos-momos"; q="special tandoori veg momos restaurant platter" },
  @{ slug="woleganic-momos"; q="organic vegetable momos aesthetic restaurant" },
  @{ slug="chilli-momos"; q="chilli vegetable momos Indo Chinese restaurant" },
  @{ slug="afghani-momos"; q="Afghani creamy vegetable momos restaurant" },
  @{ slug="kurkure-momos"; q="crispy kurkure vegetable momos restaurant" },
  @{ slug="peri-peri-momos"; q="peri peri crispy vegetable momos restaurant" },
  @{ slug="achari-momos"; q="achari vegetable momos Indian restaurant" },
  @{ slug="veg-burger"; q="premium vegetarian veg burger restaurant photography" },
  @{ slug="cheese-burger"; q="vegetarian cheese burger melted cheese aesthetic" },
  @{ slug="aloo-tikki-burger"; q="Indian aloo tikki burger restaurant" },
  @{ slug="paneer-burger"; q="paneer burger vegetarian restaurant photography" },
  @{ slug="veg-grill-sandwich"; q="grilled vegetable sandwich cafe restaurant" },
  @{ slug="cheese-sandwich"; q="grilled cheese sandwich aesthetic cafe" },
  @{ slug="cold-coffee"; q="aesthetic cold coffee glass cafe restaurant" },
  @{ slug="lassi-sweet-salted"; q="Indian sweet lassi traditional glass restaurant" },
  @{ slug="lemon-ice-tea"; q="lemon iced tea glass cafe aesthetic" },
  @{ slug="fresh-lime-water"; q="fresh lime water mint lemon restaurant" },
  @{ slug="masala-lemonade"; q="Indian masala lemonade lemon mint aesthetic" },
  @{ slug="soft-drinks"; q="cold soft drinks restaurant glass aesthetic" },
  @{ slug="mineral-water"; q="premium bottled drinking water restaurant" },
  @{ slug="roti"; q="Indian tandoori roti restaurant basket" },
  @{ slug="butter-roti"; q="Indian butter roti restaurant photography" },
  @{ slug="naan"; q="fresh plain naan Indian restaurant" },
  @{ slug="butter-naan"; q="butter naan Indian restaurant close up" },
  @{ slug="kulcha"; q="Amritsari kulcha Indian restaurant aesthetic" },
  @{ slug="paneer-kulcha"; q="paneer stuffed kulcha Indian restaurant" },
  @{ slug="rice"; q="steamed basmati rice Indian restaurant bowl" },
  @{ slug="jeera-rice"; q="jeera rice cumin basmati Indian restaurant" }
)

$headers = @{ "User-Agent" = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" }
$total = $items.Count
$i = 0
foreach ($it in $items) {
  $i++
  $slug = $it.slug
  $q = [Uri]::EscapeDataString($it.q)
  $lock = $slug.Substring(0, [Math]::Min(8, $slug.Length))
  $url = "https://loremflickr.com/400/300/$q,vegetarian,indian,restaurant?lock=$lock"
  $out = Join-Path $foodsDir "$slug.jpg"
  Write-Host "[$i/$total] Downloading $slug ..."
  try {
    Invoke-WebRequest -Uri $url -OutFile $out -Headers $headers -UseBasicParsing -TimeoutSec 30
    if ((Get-Item $out).Length -lt 5000) { throw "too small" }
    Write-Host "  -> OK"
  } catch {
    Write-Host "  -> FAILED $($_.Exception.Message), trying picsum fallback"
    try {
      $fallback = "https://picsum.photos/seed/$slug/400/300"
      Invoke-WebRequest -Uri $fallback -OutFile $out -Headers $headers -UseBasicParsing -TimeoutSec 30
      Write-Host "  -> fallback OK"
    } catch {
      Write-Host "  -> fallback FAILED"
    }
  }
  Start-Sleep -Milliseconds 300
}
Write-Host "Done. Downloaded to $foodsDir"
Get-ChildItem $foodsDir | Format-Table Name, Length