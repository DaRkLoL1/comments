import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { IComment } from './icomment';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const comments = [
      {"id":1,"parent_id":null,"datetime":"1432397374000","author_name":"Ladonna Lymer","body":"nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu"},
      {"id":2,"parent_id":null,"datetime":"1401253438000","author_name":"Sal Danskine","body":"dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem"},
      {"id":3,"parent_id":null,"datetime":"1477168299000","author_name":"Crysta Brooker","body":"rutrum ac lobortis vel dapibus at diam nam tristique tortor eu pede"},
      {"id":4,"parent_id":null,"datetime":"1541955967000","author_name":"Bee Zanetti","body":"sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices"},
      {"id":5,"parent_id":null,"datetime":"1298796049000","author_name":"Suzanne Nosworthy","body":"eros vestibulum ac est lacinia nisi venenatis tristique fusce congue"},
      {"id":6,"parent_id":null,"datetime":"1503273109000","author_name":"Lannie Di Carlo","body":"sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget"},
      {"id":7,"parent_id":null,"datetime":"1492683034000","author_name":"Flin Haimes","body":"odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla"},
      {"id":8,"parent_id":null,"datetime":"1310583911000","author_name":"Cecilius Banat","body":"mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam"},
      {"id":9,"parent_id":null,"datetime":"1496172970000","author_name":"Butch Skehens","body":"quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse"},
      {"id":10,"parent_id":null,"datetime":"1609197003000","author_name":"Ivy Coonihan","body":"rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis"},
      {"id":11,"parent_id":1,"datetime":"1317259652000","author_name":"Sebastiano Cohane","body":"quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus"},
      {"id":12,"parent_id":1,"datetime":"1553129715000","author_name":"Lizzie Gealle","body":"nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat"},
      {"id":13,"parent_id":1,"datetime":"1520713789000","author_name":"Remus Fforde","body":"ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis"},
      {"id":14,"parent_id":1,"datetime":"1441362848000","author_name":"Arly Jobbins","body":"in libero ut massa volutpat convallis morbi odio odio elementum"},
      {"id":15,"parent_id":1,"datetime":"1290648799000","author_name":"Briant Justun","body":"risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien"},
      {"id":16,"parent_id":2,"datetime":"1580779345000","author_name":"Cathrine Pottiphar","body":"feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl"},
      {"id":17,"parent_id":2,"datetime":"1377367684000","author_name":"Ardith Savine","body":"pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum"},
      {"id":18,"parent_id":3,"datetime":"1461708835000","author_name":"Fairlie Fremantle","body":"fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id"},
      {"id":19,"parent_id":3,"datetime":"1336307999000","author_name":"Germain Coales","body":"adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non"},
      {"id":20,"parent_id":3,"datetime":"1584184947000","author_name":"Rosamond McCarl","body":"nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas"},
      {"id":21,"parent_id":3,"datetime":"1387207581000","author_name":"Danni Fowle","body":"nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia"},
      {"id":22,"parent_id":4,"datetime":"1545082065000","author_name":"Alex Epelett","body":"laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis"},
      {"id":23,"parent_id":5,"datetime":"1589923952000","author_name":"Maryanne Renny","body":"elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus"},
      {"id":24,"parent_id":6,"datetime":"1347971418000","author_name":"Cthrine Piser","body":"amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus"},
      {"id":25,"parent_id":7,"datetime":"1292708867000","author_name":"Honoria Grimster","body":"lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis"},
      {"id":26,"parent_id":7,"datetime":"1573089785000","author_name":"Olivette Iddons","body":"ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id"},
      {"id":27,"parent_id":1,"datetime":"1273978310000","author_name":"Katalin Keddey","body":"nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis"},
      {"id":28,"parent_id":1,"datetime":"1415144551000","author_name":"Edwina Fidelus","body":"velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla"},
      {"id":29,"parent_id":4,"datetime":"1336677594000","author_name":"Ansel Dowry","body":"luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam"},
      {"id":30,"parent_id":null,"datetime":"1294925467000","author_name":"Orran Piell","body":"orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet"},
      {"id":31,"parent_id":4,"datetime":"1414487559000","author_name":"Trish Riordan","body":"habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius"},
      {"id":32,"parent_id":9,"datetime":"1514670599000","author_name":"Glenn Blader","body":"elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum"},
      {"id":33,"parent_id":11,"datetime":"1534634773000","author_name":"Evangelia Murtell","body":"ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis"},
      {"id":34,"parent_id":12,"datetime":"1549647432000","author_name":"Timmi Judgkins","body":"vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit"},
      {"id":35,"parent_id":11,"datetime":"1313977637000","author_name":"Clevie Tutton","body":"mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem"},
      {"id":36,"parent_id":11,"datetime":"1420652496000","author_name":"Lewes Gillcrist","body":"primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin"},
      {"id":37,"parent_id":20,"datetime":"1593540827000","author_name":"Engelbert Mournian","body":"luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut"},
      {"id":38,"parent_id":37,"datetime":"1369954377000","author_name":"Herrick Brodnecke","body":"tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet"},
      {"id":39,"parent_id":29,"datetime":"1351612074000","author_name":"Rachele Denniss","body":"molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique"},
      {"id":40,"parent_id":29,"datetime":"1559588950000","author_name":"Britt Kaplin","body":"elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis"},
      {"id":41,"parent_id":40,"datetime":"1539683786000","author_name":"Lilian Tassaker","body":"sapien a libero nam dui proin leo odio porttitor id"},
      {"id":42,"parent_id":40,"datetime":"1422567107000","author_name":"Elroy Farmer","body":"eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla"},
      {"id":43,"parent_id":null,"datetime":"1584957191000","author_name":"Jervis Kid","body":"faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet"},
      {"id":44,"parent_id":3,"datetime":"1398693510000","author_name":"Quintin Hatchett","body":"libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac"},
      {"id":45,"parent_id":20,"datetime":"1605955049000","author_name":"Rafael Redferne","body":"aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse"},
      {"id":46,"parent_id":5,"datetime":"1381315057000","author_name":"Mariya Quinsee","body":"erat id mauris vulputate elementum nullam varius nulla facilisi cras"},
      {"id":47,"parent_id":19,"datetime":"1462831479000","author_name":"Hillel Tubritt","body":"lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget"},
      {"id":48,"parent_id":10,"datetime":"1464730891000","author_name":"Sidonia Antognetti","body":"sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in"},
      {"id":49,"parent_id":2,"datetime":"1471893936000","author_name":"Naoma Widdison","body":"turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla"},
      {"id":50,"parent_id":35,"datetime":"1334570827000","author_name":"Harley Fireman","body":"eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet"}];
    return {comments};
  }

  genId(comments: IComment[]): number {
    return comments.length > 0 ? Math.max(...comments.map(comment => comment.id)) + 1 : 1;
  }
}
