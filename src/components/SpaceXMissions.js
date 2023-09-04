// src/components/SpaceXMissions.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/spaceXSlice';

const SpaceXMissions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.spaceX.missions);
  const status = useSelector((state) => state.spaceX.status);
  const error = useSelector((state) => state.spaceX.error);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>SpaceX Missions</h2>
      <ul>
        {missions.map((mission) => (
          <li key={mission.mission_id}>{mission.mission_name} <br />
          <strong>Description:</strong> {mission.description}
          </li> 
        ))}
      </ul>
    </div>
  );
};

export default SpaceXMissions;
