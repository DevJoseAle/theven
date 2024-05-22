import 'react-native-url-polyfill/auto';

import {createClient} from '@supabase/supabase-js';
import {Database} from '../types/supabase';

const supabaseUrl: string = 'https://rnzbecyktkhcqqxeuzvd.supabase.co';
const supabaseAnonKey: string =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuemJlY3lrdGtoY3FxeGV1enZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU4Njc2NjgsImV4cCI6MjAzMTQ0MzY2OH0.mIG1ajmJ1QBRgXsFY0lLym3pvJjX091cjJo7wVCSGsI';

//TODO PASAR AL .ENV.LOCAL
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
