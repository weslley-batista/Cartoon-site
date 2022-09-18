import { BrowserRouter, Route, Routes as Switch } from "react-router-dom"

export const Routes = () =>{
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<><h1>h1 da route /</h1></>}/>
                
            </Switch>
        </BrowserRouter>
    )
}