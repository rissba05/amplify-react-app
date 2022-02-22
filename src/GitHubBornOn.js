// Import useState and useEffect hooks from React
import { 
      useState
      , useEffect
  } from 'react';

// Import the API category from AWS Amplify
import { API } from 'aws-amplify';

export const GitHubBornOn = () => {
    
    const [bornOnInfo, setBornOn] = useState({});
    
    const fetchGitHubBornOn = async () => {

        try {
            const data = await API.get(
                'cryptoapi22s'
                , '/born'
            );

            setBornOn(data.bornOnInfo);
        }

        catch (err) {
            setBornOn({
                login: "Error logging in"
                , created_at: "Error"
            });
        }
    };

    useEffect(
        () => fetchGitHubBornOn()
        , []
    );

    return (
        <h2>
            {bornOnInfo.login} - {bornOnInfo.created_at}
             
        </h2>
    );
};