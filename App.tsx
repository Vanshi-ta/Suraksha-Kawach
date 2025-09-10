import React from 'react';
import { HashRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { UserRole } from './types';

// Layouts
import MainLayout from './components/layout/MainLayout';

// Pages
import LoginPage from './pages/Login';

// Student Pages
import StudentDashboard from './pages/student/StudentDashboard';
import GyanKendra from './pages/student/GyanKendra';
import AbhyasArena from './pages/student/AbhyasArena';
import Profile from './pages/student/Profile';

// Teacher Pages
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import StudentReports from './pages/teacher/StudentReports';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';

// Shared Pages
import SatarkHub from './pages/shared/SatarkHub';
import Settings from './pages/shared/Settings';

const ProtectedRoute: React.FC<{ allowedRoles: UserRole[] }> = ({ allowedRoles }) => {
    const { isAuthenticated, user } = useAuth();
    if (!isAuthenticated || !user) {
        return <Navigate to="/login" replace />;
    }
    return allowedRoles.includes(user.role) ? <Outlet /> : <Navigate to="/unauthorized" replace />;
};


const AppRoutes = () => {
    const { isAuthenticated, user } = useAuth();

    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/unauthorized" element={<div>Unauthorized Access</div>} />

            <Route
                path="/"
                element={
                    isAuthenticated ? <MainLayout /> : <Navigate to="/login" />
                }
            >
                {/* Student Routes */}
                <Route element={<ProtectedRoute allowedRoles={[UserRole.STUDENT, UserRole.TEACHER]} />}>
                    <Route path="student/dashboard" element={<StudentDashboard />} />
                    <Route path="gyan-kendra" element={<GyanKendra />} />
                    <Route path="abhyas-arena" element={<AbhyasArena />} />
                    <Route path="profile" element={<Profile />} />
                </Route>
                
                {/* Teacher Routes */}
                 <Route element={<ProtectedRoute allowedRoles={[UserRole.TEACHER]} />}>
                    <Route path="teacher/dashboard" element={<TeacherDashboard />} />
                    <Route path="teacher/reports" element={<StudentReports />} />
                </Route>

                {/* Admin Routes */}
                <Route element={<ProtectedRoute allowedRoles={[UserRole.ADMIN]} />}>
                    <Route path="admin/dashboard" element={<AdminDashboard />} />
                </Route>
                
                {/* Shared Routes */}
                <Route path="satark-hub" element={<SatarkHub />} />
                <Route path="settings" element={<Settings />} />

                {/* Default route after login */}
                <Route
                    index
                    element={
                        !user ? <Navigate to="/login" /> :
                        user.role === UserRole.STUDENT ? <Navigate to="/student/dashboard" /> :
                        user.role === UserRole.TEACHER ? <Navigate to="/teacher/dashboard" /> :
                        <Navigate to="/admin/dashboard" />
                    }
                />
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default function App() {
  return (
    <AuthProvider>
        <HashRouter>
            <AppRoutes />
        </HashRouter>
    </AuthProvider>
  );
}