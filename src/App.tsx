import { RainbowFirebaseApp } from '@rainbow-modules/app';
import { Routes, Route, Outlet } from 'react-router-dom';
import { WhenAuthenticated, WhenNoAuthenticated } from '@rainbow-modules/auth';
import { app } from 'data/firebase';
import Login from 'pages/Login';
import AppPage from 'pages/App';

const App = () => (
    <RainbowFirebaseApp app={app}>
        <Routes>
            <Route
                path="/login"
                element={(
                    <WhenNoAuthenticated redirect="/apps">
                        <Login />
                    </WhenNoAuthenticated>
                )}
            />
            <Route
                path="/"
                element={(
                    <WhenAuthenticated path="/" redirect="/login">
                        <Outlet />
                    </WhenAuthenticated>
                )}
            >
                <Route path="/" element={<AppPage />} />
            </Route>
        </Routes>
    </RainbowFirebaseApp>
);

export default App;
