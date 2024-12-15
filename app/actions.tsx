"use server";

export const onSubmit = async (applicationData: object) => {
  const res = await fetch("https://harvest.greenhouse.io/v1/candidates", {
    method: "POST",
    body: JSON.stringify({
      ...applicationData,
      applications: [{ job_id: "4285367007" }],
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: "Basic ZjA2YjJiMTUzZTAxNmY4ZTdjMzYzMjYyN2FmNTZiMWQtNzo=",
      "On-Behalf-Of": "4280249007",
    },
  });
  const success = await res.ok;

  const jsonResponse = await res.json();
  console.log(jsonResponse);
  return success;
};

export const getSchools = async () => {
    const schoolsResponse = await fetch(
        "https://harvest.greenhouse.io/v1/schools",
        {
          method: "GET",
          headers: {
            Authorization: "Basic ZjA2YjJiMTUzZTAxNmY4ZTdjMzYzMjYyN2FmNTZiMWQtNzo=",
            "Content-Type": "application/json",
          },
        },
      );
      const schools = await schoolsResponse.json();
      return schools;
}
