import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TictactoeService {

  constructor() { }
  check_winner(inp:any):boolean
  {
      if (inp[0] != 0 && inp[0] == inp[1] && inp[0] == inp[2])
          return true
      if (inp[0] != 0 && inp[0] == inp[3] && inp[0] == inp[6])
          return true
      if (inp[0] != 0 && inp[0] == inp[4] && inp[0] == inp[8])
          return true
      if (inp[2] != 0 && inp[2] == inp[4] && inp[2] == inp[6])
          return true
      if (inp[3] != 0 && inp[3] == inp[4] && inp[3] == inp[5])
          return true
      if (inp[1] != 0 && inp[1] == inp[4] && inp[1] == inp[7])
          return true
      if (inp[2] != 0 && inp[2] == inp[5] && inp[2] == inp[8])
          return true
      if (inp[6] != 0 && inp[6] == inp[7] && inp[6] == inp[8])
          return true
      return false
  }
  check_full(inp:any):boolean
  {
      for (let i:number = 0; i < 9; i++)
          if (inp[i] == 0)
              return false
      return true
  }
}
