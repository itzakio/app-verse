export const loadApps = () =>{
    try{
        const apps = localStorage.getItem("installed")
        return apps?JSON.parse(apps):[]
    }catch(err){
        console.log(err)
        return []
    }
}

export const updateAppList = (app) =>{
    const appList = loadApps()

    let updatedList = [] 
    try{
        
        if(appList){
            const isDuplicate = appList.some(a=> a.id === app.id)
            if(isDuplicate){
                alert("app already installed")
                return;
            }
            else{
               updatedList = [...appList, app] 
            }
            
        }else{
            updatedList.push(app)
        }
        localStorage.setItem("installed", JSON.stringify(updatedList))
        
    }catch(err){
        console.log(err)
    }
}

export const uninstallApps = (id) =>{
    const appList = loadApps()
    try{
        const updateAppList = appList.filter(app => app.id !== id)
        localStorage.setItem("installed", JSON.stringify(updateAppList))
    }catch(err){
        console.log(err)
    }
}