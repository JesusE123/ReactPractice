
import Card from '../../components/Card/Card';
import { Cards } from '../../components/Cards/Cards';
import { useDashboard } from './useDashboard';

const Dashboard = () => {
    const { data, loading } = useDashboard();

    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <Cards data={data}/>
    )
}

export { Dashboard }
