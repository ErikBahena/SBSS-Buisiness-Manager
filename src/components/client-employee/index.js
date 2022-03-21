import Head from "next/head";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useSearch } from "src/hooks";
import { clientSearchKeys } from "src/utils/fuzzy-search-keys";

import { connect } from "react-redux";

import { Box, Container, Skeleton, Stack } from "@mui/material";

import AddResourcePopover from "src/components/client-employee/add-resource-popover";
import { ListResults } from "src/components/client-employee/list-results";
import { ListToolbar } from "src/components/client-employee/list-toolbar";

import { capitalizeFirstLetter } from "src/utils/letter-utils";

const index = ({ userId, addResourceFunc, type, popoverTitle, mainResourceFunc }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const { status, data, refetch } = useQuery(`${type}s`, () => mainResourceFunc(userId));

  const [orderedData, handleSearch, searchTerm, setData] = useSearch("", data, clientSearchKeys);

  useEffect(() => data && setData(data), [data]);

  return (
    <>
      <Head>
        <title>{`${capitalizeFirstLetter(type)}`}s</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          {status === "loading" && (
            <Stack spacing={1}>
              <Skeleton variant="rectangular" width={"auto"} height={40} />
              <Skeleton variant="rectangular" width={"auto"} height={130} />
              <Skeleton variant="rectangular" width={"auto"} height={250} />
            </Stack>
          )}

          {status === "success" && (
            <>
              {Boolean(anchorEl) && (
                <AddResourcePopover
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  setAnchorEl={setAnchorEl}
                  refetch={refetch}
                  addResourceFunc={addResourceFunc}
                  type={type}
                  title={popoverTitle}
                />
              )}
              <ListToolbar
                searchTerm={searchTerm}
                handleSearch={handleSearch}
                setAnchorEl={setAnchorEl}
                type={type}
              />
              <Box sx={{ mt: 3 }}>
                <ListResults data={orderedData} type={type} />
              </Box>
            </>
          )}

          {status === "error" && <h2>Error</h2>}
        </Container>
      </Box>
    </>
  );
};

const mapStateToProps = (state) => ({
  userId: state.user.user_id,
});

export default connect(mapStateToProps)(index);