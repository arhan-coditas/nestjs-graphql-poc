import { Injectable } from '@nestjs/common';
import { CreateDummyRestDto } from './dto/create-dummy-rest.dto';
import { UpdateDummyRestDto } from './dto/update-dummy-rest.dto';
import { ApolloClient, InMemoryCache, HttpLink, gql } from '@apollo/client';

@Injectable()
export class DummyRestService {
  create(createDummyRestDto: CreateDummyRestDto) {
    return 'This action adds a new dummyRest';
  }

  async sendQuery(query: string) {
    console.log(`query:=>`, query);
    // try {
    //   const graphqlServiceURL =
    //     'https://r2dyi4-ip-115-160-223-174.tunnelmole.net/graphql';
    //   const response = await axios.post(graphqlServiceURL, {
    //     query,
    //   });
    //   console.log(`responseData:->`,response.data.data)
    // } catch (e) {
    //   console.log(e);
    //   throw e;
    // }

    const client = new ApolloClient({
      link: new HttpLink({
        uri: `http://r2dyi4-ip-115-160-223-174.tunnelmole.net/graphql`,
        headers: {},
      }),
      cache: new InMemoryCache(),
    });

    const reformedQuery = gql`
      ${query}
    `;
    client
      .query({ query: reformedQuery, variables: {} })
      .then((result) => console.log(`result: `, result.data))
      .catch((error) => console.log(`Error:`, error));
  }

  findOne(id: number) {
    return `This action returns a #${id} dummyRest`;
  }

  update(id: number, updateDummyRestDto: UpdateDummyRestDto) {
    return `This action updates a #${id} dummyRest`;
  }

  remove(id: number) {
    return `This action removes a #${id} dummyRest`;
  }
}
