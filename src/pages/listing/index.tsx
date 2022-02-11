import { useState } from "react";
import { List } from "antd";
import { HashRouter as Router, Link, Route, Routes } from "react-router-dom";

import { useGetCharacters } from "api-client/queries";
import { PageLayout } from "components/layout";
import { ListItem } from "./list-item";
import { ListHeader } from "./list-header";
import { FormValues } from "types";
import { CharacterDetails } from "./character-detail";

export function Listing() {
  const [page, setPage] = useState(1);
  const [searchStr, setSearchStr] = useState("");
  const [filters, setFilters] = useState<FormValues>({
    gender: "",
    species: "",
    status: "",
    type: "",
  });
  const { data: response, isLoading } = useGetCharacters(page, {
    name: searchStr,
    ...filters,
  });

  return (
    <PageLayout>
      <Router>
        <Routes>
          <Route path="/:charId" element={<CharacterDetails />}></Route>
          <Route
            path="/"
            element={
              <>
                <ListHeader
                  formValues={filters}
                  onSearch={setSearchStr}
                  onSubmit={setFilters}
                  onPageChange={setPage}
                />
                <List
                  itemLayout="horizontal"
                  loading={isLoading}
                  dataSource={response?.results}
                  pagination={{
                    current: page,
                    pageSize: 20,
                    pageSizeOptions: [20],
                    total: response?.info.count,
                    onChange: (pageNo) => {
                      setPage(pageNo);
                    },
                  }}
                  renderItem={(character) => (
                    <Link
                      to={`/${character.id}`}
                      state={{
                        character,
                      }}
                    >
                      <ListItem character={character} />
                    </Link>
                  )}
                />
              </>
            }
          />
        </Routes>
      </Router>
    </PageLayout>
  );
}
