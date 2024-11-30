'use client'

import React, {useEffect, useState} from 'react';
import DefaultButton from "@/component/button/DefaultButton";
import useInspectionStore from "@/store/system/inspection/useInspectionStore";
import { useTimer } from 'react-timer-hook';

function InspectionButton(props) {

  const messageId = useInspectionStore((state) => state.messageId);

  const [alertMessage, serAlertMessage] = useState("");
  const [isNow, setIsNow] = useState(false);
  const [time, setTime] = useState(new Date() + 10);

  // useTimer 훅 사용
  const { seconds, minutes, isRunning, start, pause, resume, restart } = useTimer({
    expiryTimestamp: time
  });

  const handleImmediateMaintenance = () => {
    if (messageId === null) {
      alert("점검메세지를 선택해주세요.")
      return
    }
    setTime(new Date() + 10);
    serAlertMessage(`${isNow ? "즉시" : "30분 이후에 "} 서버점검이 시작됩니다.`);
  };

  useEffect(() => {
    if (alertMessage !== "") {
      restart(new Date() + 10)
    } else {
      start();
    }
  }, [time]);




  return (
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center gap-2">
          <DefaultButton
              onClick={handleImmediateMaintenance}
              color='danger'
          >
            임시점검
          </DefaultButton>
          <div>
            <label htmlFor={"now"}>즉시</label>
            <input className={""} id={"now"} type={"checkbox"} checked={isNow}
                   onClick={() => setIsNow(!isNow)}></input>
          </div>
        </div>

        {/* 선택된 메시지 */}
        {alertMessage && (
            <div
                className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded-md text-red-600">
              {alertMessage}
              <div>
                <h1>카운트다운 타이머</h1>
                <div>
                  {minutes}:{seconds} <br/>
                </div>
              </div>
            </div>

        )}
      </div>
  );
}

export default InspectionButton;