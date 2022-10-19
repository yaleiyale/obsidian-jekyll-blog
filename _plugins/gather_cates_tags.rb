module Jekyll
  class Site
    def tags
      @post_attr_hash["tags"] ||= begin
        posts = collections['notes']
        hash = Hash.new { |h, key| h[key] = [] }
        posts.docs.each do |p|
          p.data["tags"]&.each { |t| hash[t] << p }
        end
        hash.each_value { |posts| posts.sort!.reverse! }
        hash
      end
    end
  end
end