import { Home, Leaf, Layers, BarChart, Database, Users, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {

  return (
    <aside className="h-screen bg-[#0F1F33] text-white p-4 sm:p-6 flex flex-col gap-6 shadow-lg
                       w-20 sm:w-48 md:w-56 lg:w-64 transition-all duration-300">

      {/* Logo */}
      <div className="flex flex-col items-start">
        <h1 className="text-lg sm:text-xl font-bold">Senamhi</h1>
        <span className="text-[10px] sm:text-xs text-gray-300">Fenología de Cultivos v1.0</span>
      </div>

      {/* Navegación */}
      <nav className="flex flex-col gap-5 sm:gap-7 overflow-y-auto">

        {/* Bloque 1 */}
        <div>
          <p className="text-gray-400 text-[9px] sm:text-xs mb-1 sm:mb-2 tracking-wide">GESTIÓN DE CULTIVOS</p>

          <ul className="flex flex-col gap-1 sm:gap-2">

            <Item icon={<Home size={16} />} label="Dashboard Principal" to="/" />

            <Item icon={<Leaf size={16} />} label="Crear Cultivo" to="/cultivo/crear" />

            <Item icon={<Layers size={16} />} label="Crear Cosecha" to="/cosecha/crear" />

            <Item icon={<BarChart size={16} />} label="Registrar Fase Fenológica" to="/fenologia/registrar" />

            <Item icon={<BarChart size={16} />} label="Monitoreo de Cultivos" to="/cultivos/monitoreo" />

          </ul>
        </div>

        {/* Bloque 2 */}
        <div>
          <p className="text-gray-400 text-[9px] sm:text-xs mb-1 sm:mb-2 tracking-wide">ANÁLISIS Y REPORTES</p>

          <ul className="flex flex-col gap-1 sm:gap-2">
            <Item icon={<BarChart size={16} />} label="Generar Reportes" to="/reportes" />
            <Item icon={<BarChart size={16} />} label="Estadísticas Avanzadas" to="/estadisticas" />
          </ul>
        </div>

        {/* Bloque 3 */}
        <div>
          <p className="text-gray-400 text-[9px] sm:text-xs mb-1 sm:mb-2 tracking-wide">SISTEMA</p>

          <ul className="flex flex-col gap-1 sm:gap-2">
            <Item icon={<Database size={16} />} label="Base de Datos" to="/base-datos" />
            <Item icon={<Users size={16} />} label="Gestión de Usuarios" to="/usuarios" />
            <Item icon={<Settings size={16} />} label="Configuración" to="/configuracion" />
          </ul>
        </div>

      </nav>

    </aside>
  );
};


interface ItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
}

export const Item = ({ icon, label, to }: ItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition 
        ${
          isActive
            ? "bg-[#1C2F4A] text-green-400 border-l-4 border-green-500"
            : "hover:bg-[#1C2F4A]"
        }`
      }
    >
      {icon}
      <span className="text-[10px] sm:text-sm">{label}</span>
    </NavLink>
  );
};

export default Sidebar;
