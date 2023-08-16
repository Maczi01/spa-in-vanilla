const router = async () => {
     const router = [
            { path: "/", view: () => console.log("Viewing Dashboard") },
            { path: "/posts", view: () => console.log("Viewing posts") },
            { path: "/settings", view: () => console.log("Viewing settings") },
     ];

     const potentialMatches = router.map(route => {
            return {
                route: route,
                isMatch: location.pathname === route.path
            };
     })

    console.log(potentialMatches);
}

document.addEventListener("DOMContentLoaded", () => {
    router();
})