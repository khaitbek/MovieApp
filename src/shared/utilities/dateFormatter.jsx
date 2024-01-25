export function formatDate(date){
    // if(!date) return;
    console.log(date);
    const dateFormatter = new Intl.DateTimeFormat("en-us",{
        dateStyle:"short"
    });
    return dateFormatter.format(date);
}