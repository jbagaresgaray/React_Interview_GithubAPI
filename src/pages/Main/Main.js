import { useEffect, useState } from "react";
import { Col, Container, Row, Tabs, Tab } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import AppHeader from "../../components/AppHeader";
import AppUserContainer from "../../components/AppUserContainer";
import AppRepositories from "../../components/AppRepositories";
import AppOrganizations from "../../components/AppOrganizations";
import AppFollowersFollowingLists from "../../components/AppFollowersFollowingLists";
import {
  getUser,
  getUserFollowers,
  getUserFollowing,
  getUserOrganizations,
  getUserPackages,
  getUserProjects,
  getUserRepository,
} from "../../stores/middleware/users";

import { githubSelectors } from "../../stores/slices/users";

import "./Main.scss";

function Main() {
  const params = useParams();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const user = useSelector(githubSelectors.user);
  const isLoadingUser = useSelector(githubSelectors.isLoadingUser);

  const repos = useSelector(githubSelectors.repos);
  const isLoadingRepos = useSelector(githubSelectors.isLoadingRepos);

  const organizations = useSelector(githubSelectors.organizations);
  const isLoadingOrganization = useSelector(
    githubSelectors.isLoadingOrganization
  );

  const followers = useSelector(githubSelectors.followers);
  const isLoadingFollowers = useSelector(githubSelectors.isLoadingFollowers);

  const followings = useSelector(githubSelectors.followings);
  const isLoadingFollowing = useSelector(githubSelectors.isLoadingFollowing);

  console.log("followers: ", followers);
  console.log("followings: ", followings);

  useEffect(() => {
    if (params && params.username) {
      setSearch(params.username);

      dispatch(getUser(params.username));
      dispatch(getUserRepository(params.username));
      dispatch(getUserFollowers(params.username));
      dispatch(getUserFollowing(params.username));
      dispatch(getUserOrganizations(params.username));
      dispatch(getUserProjects(params.username));
      dispatch(getUserPackages(params.username));
    } else {
      setSearch("");
    }

    window.scrollTo(0, 0);
  }, [dispatch, params]);

  return (
    <div className="Main">
      <AppHeader />
      <main className="Main__main">
        <Container>
          {!search && (
            <section className="py-5 text-center container">
              <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                  <h1 className="fw-light">Search Github using username</h1>
                  <p className="lead text-muted">
                    Search using github username and get all information like
                    user's public repositories, followers and many more.
                  </p>
                </div>
              </div>
            </section>
          )}

          {!!search && (
            <section>
              <Row>
                <Col xl={3}>
                  <AppUserContainer user={user} isLoading={isLoadingUser} />
                </Col>
                <Col xl={9}>
                  <Tabs defaultActiveKey="repos" className="mb-3">
                    <Tab eventKey="repos" title="Repositories">
                      <AppRepositories
                        repos={repos}
                        isLoading={isLoadingRepos}
                      />
                    </Tab>
                    <Tab eventKey="orgs" title="Organizations">
                      <AppOrganizations
                        organizations={organizations}
                        isLoading={isLoadingOrganization}
                      />
                    </Tab>
                    <Tab eventKey="followers" title="Followers">
                      <AppFollowersFollowingLists
                        users={followers}
                        isLoading={isLoadingFollowers}
                      />
                    </Tab>
                    <Tab eventKey="following" title="Following">
                      <AppFollowersFollowingLists
                        users={followings}
                        isLoading={isLoadingFollowing}
                      />
                    </Tab>
                  </Tabs>
                </Col>
              </Row>
            </section>
          )}
        </Container>
      </main>
    </div>
  );
}

export default Main;
