import { useState, useEffect } from "react";
import { db } from "../helpers/firebase";
import { authentication } from "../helpers/firebase";
import { getDocs, collection } from "firebase/firestore";
import { Bar } from "react-chartjs-2";
import { httpsCallable } from "firebase/functions";
import { functions } from "../helpers/firebase";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import useAuth from "../contexts/Auth";

function BarChart() {
  const { authClaims } = useAuth();
  const [sales, setSales] = useState({
    January: 0,
    February: 0,
    March: 0,
    April: 0,
    May: 0,
    June: 0,
    July: 0,
    August: 0,
    September: 0,
    October: 0,
    November: 0,
    December: 0,
  });

  useEffect(async () => {
    const listUsers = httpsCallable(functions, "listUsers");
    listUsers()
      .then(({ data }) => {
        if (authClaims?.supervisor) {
          const agentsIDs = data
            .filter(
              (user) =>
                user?.role?.agent === true &&
                user?.meta?.added_by_uid === authentication.currentUser.uid
            )
            .map((user) => user.uid);
          return [...agentsIDs, authentication.currentUser.uid];
        } else if (authClaims?.admin) {
          const agentsIDs = data
            .filter((user) => user?.role?.agent)
            .filter(
              (user) =>
                user?.meta?.added_by_uid === authentication.currentUser.uid
            )
            .map((user) => user.uid);
          const supervisorIDs = data
            .filter(
              (user) =>
                user?.role?.supervisor === true &&
                user?.meta?.added_by_uid === authentication.currentUser.uid
            )
            .map((user) => user.uid);
          return data
            .filter(
              (user) =>
                user?.role?.supervisor === true || user?.role?.agent === true
            )
            .filter((user) =>
              [
                authentication.currentUser.uid,
                ...agentsIDs,
                ...supervisorIDs,
              ].includes(user.meta.added_by_uid)
            )
            .map((user) => user.uid);
        } else if (authClaims?.agent) {
          return [authentication.currentUser.uid];
        } else if (authClaims?.superadmin) {
          const usersID = data.map((user) => user.uid);
          return usersID;
        }
      })
      .then(async (userIDs) => {
        const policies = await getPolicies(collection(db, "policies"));
        return policies.filter((policy) =>
          userIDs.includes(policy.added_by_uid)
        );
      })
      .then((policyArray) => {
        let obj = {
          January: 0,
          February: 0,
          March: 0,
          April: 0,
          May: 0,
          June: 0,
          July: 0,
          August: 0,
          September: 0,
          October: 0,
          November: 0,
          December: 0,
        };

        policyArray.forEach((policy) => {
          if (policy?.createdAt) {
            const { createdAt } = policy;
            const date = new Date(createdAt);

            const yearCreated = date.getFullYear();
            const currentYear = new Date().getFullYear();

            if (yearCreated === currentYear) {
              switch (date.getMonth()) {
                case 0:
                  obj.January += policy.stickersDetails.length;
                  break;
                case 1:
                  obj.February += policy.stickersDetails.length;
                  break;
                case 2:
                  obj.March += policy.stickersDetails.length;
                  break;
                case 3:
                  obj.April += policy.stickersDetails.length;
                  break;
                case 4:
                  obj.May += policy.stickersDetails.length;
                  break;
                case 5:
                  obj.June += policy.stickerDetails.length;
                  break;
                case 6:
                  obj.July += policy.stickerDetails.length;
                  break;
                case 7:
                  obj.August += policy.stickerDetails.length;
                  break;
                case 8:
                  obj.September += policy.stickerDetails.length;
                  break;
                case 9:
                  obj.October += policy.StickerDetails.length;
                  break;
                case 10:
                  obj.November += policy.StickerDetails.length;
                  break;
                case 11:
                  obj.December += policy.StickerDetails.length;
                  break;
              }
            }
          }
        });
        setSales(obj);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getPolicies = async (policyCollectionRef) => {
    const data = await getDocs(policyCollectionRef);
    const allPolicies = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return allPolicies;
  };

  const labels = Object.keys(sales);
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
      title: {
        display: false,
        text: "Monthly  Motor Third Party Stickers",
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Sticker sales",
        data: [
          ...Object.values(sales),
          Math.max(...Object.values(sales)) +
            0.2 * Math.max(...Object.values(sales)),
        ],
        backgroundColor: "#E0E7EC",
        hoverBackgroundColor: "#1475CF",
      },
    ],
  };
  return <Bar options={options} data={data} className="bar-chart" />;
}

export default BarChart;
