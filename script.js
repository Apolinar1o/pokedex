const  itens = [
    "Bulbasaur"
    ,"Ivysaur"
    ,"Venusaur"
    ,"Charmander "
    ,"Charmeleon"
    ,"Charizard"
    ,"Squirtle"
    ,"Wartortle"
    ,"Blastoise"
    ,"Caterpie"
    ,"Metapod"]

    const searchInput = document.getElementById("pesquisa")
    const searchResults = document.getElementById("search-results")

    searchInput.addEventListener("keyup", (e) => {
        const searchTerm = e.target.value.toLowerCase()
        const results = []

        itens.forEach((item) => {
            const itemLowerCase = item.toLowerCase ()
            if (itemLowerCase.includes(searchTerm)) {
                results.push(item)
            }
        })
        showResults(results)
    })

    function showResults(results) {
        searchResults.innerHtml = ""

        results.forEach((result) => {
            const li = document.createElement("li")
            li.textContent = result
            searchResults.appendChild(li)
        })
    }